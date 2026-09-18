// Pure pricing helpers — no React/DOM — so the exact same logic runs on
// the client (live running total) and on the server (recomputing the
// total from scratch in the API route, never trusting the client's number).

export function calculateTotal(selectedServiceIds, allCeremonies) {
  let total = 0;
  let count = 0;
  for (const ceremony of Object.values(allCeremonies)) {
    for (const service of ceremony.services) {
      if (selectedServiceIds.has(service.id)) {
        total += service.price;
        count += 1;
      }
    }
  }
  return { total, count };
}

// Flat { ceremony, service, price } list for the API payload and the
// final-step summary — only ceremonies actually visited/relevant to the
// current event type are included, in that ceremony's declared order.
export function buildSelections(selectedServiceIds, ceremonyIds, allCeremonies) {
  const selections = [];
  ceremonyIds.forEach((ceremonyId) => {
    const ceremony = allCeremonies[ceremonyId];
    if (!ceremony) return;
    ceremony.services.forEach((service) => {
      if (selectedServiceIds.has(service.id)) {
        selections.push({ ceremony: ceremony.title, service: service.name, price: service.price });
      }
    });
  });
  return selections;
}

// The API payload identifies each selection by ceremony/service NAME
// (not id), so the server can't just re-run calculateTotal() against a
// Set of ids — instead, look up each submitted (ceremony, service) pair
// against the real data and use ITS price, ignoring whatever price the
// client sent. Unknown pairs (tampered/stale) are silently dropped rather
// than trusted.
export function verifySelections(selections, allCeremonies) {
  const priceByCeremonyAndService = {};
  Object.values(allCeremonies).forEach((ceremony) => {
    priceByCeremonyAndService[ceremony.title] = {};
    ceremony.services.forEach((service) => {
      priceByCeremonyAndService[ceremony.title][service.name] = service.price;
    });
  });

  let total = 0;
  const verified = [];
  (selections ?? []).forEach((selection) => {
    const authoritativePrice = priceByCeremonyAndService[selection?.ceremony]?.[selection?.service];
    if (authoritativePrice === undefined) return;
    total += authoritativePrice;
    verified.push({ ceremony: selection.ceremony, service: selection.service, price: authoritativePrice });
  });

  return { total, count: verified.length, verified };
}
