import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CATEGORIES, PACKAGE_TIERS, ITEM_GROUPS, calculateTotal, getSelectedBreakdown } from '../../Data/estimatorData';
import { sanitizeByField, validateField } from '../../Utils/formValidation';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, STUDIO_EMAIL } from '../../Utils/emailjsConfig';
import CategoryStep from './CategoryStep';
import TierStep from './TierStep';
import ItemsStep from './ItemsStep';
import FinalStep from './FinalStep';
import StickyTotalBar from './StickyTotalBar';

const INITIAL_FORM_DATA = { name: '', email: '', phone: '', eventDate: '', location: '' };
const REQUIRED_FIELDS = ['name', 'email', 'phone', 'eventDate', 'location'];

function formatRupees(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function buildEnquiryMessage({ categoryLabel, tierLabel, breakdown, total }) {
  const lines = [`Category: ${categoryLabel}`, `Package: ${tierLabel}`, ''];
  breakdown.forEach((group) => {
    lines.push(`${group.groupLabel}:`);
    group.items.forEach((item) => lines.push(`  - ${item.label} (${formatRupees(item.price)})`));
    lines.push('');
  });
  lines.push(`Total Estimate: ${formatRupees(total)}`);
  return lines.join('\n');
}

function PackageEstimator() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [categoryId, setCategoryId] = useState(null);
  const [tierId, setTierId] = useState(null);
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formErrors, setFormErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const todayIso = new Date().toISOString().slice(0, 10);
  const itemGroups = categoryId ? ITEM_GROUPS[categoryId] ?? [] : [];
  const total = calculateTotal(selectedItemIds, itemGroups);
  const category = CATEGORIES.find((c) => c.id === categoryId);
  const tier = (PACKAGE_TIERS[categoryId] ?? []).find((t) => t.id === tierId);

  const handleSelectCategory = (newCategoryId) => {
    if (newCategoryId !== categoryId) {
      setCategoryId(newCategoryId);
      setTierId(null);
      setSelectedItemIds([]);
    }
    setCurrentStepIndex(1);
  };

  const handleSelectTier = (newTierId) => {
    // Re-clicking the tier that's already active must not wipe manual item
    // edits made after picking it — only an actual tier change reseeds
    // selectedItemIds from that tier's defaults.
    if (newTierId !== tierId) {
      const nextTier = (PACKAGE_TIERS[categoryId] ?? []).find((t) => t.id === newTierId);
      setTierId(newTierId);
      setSelectedItemIds(nextTier?.defaultItemIds ?? []);
    }
    setCurrentStepIndex(2);
  };

  const handleToggleItem = (itemId) => {
    setSelectedItemIds((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]));
  };

  const handleBack = () => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const sanitized = sanitizeByField(name, value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    setFormErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleFieldBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, todayIso);
    setFormErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    REQUIRED_FIELDS.forEach((field) => {
      const error = validateField(field, formData[field], todayIso);
      if (error) nextErrors[field] = error;
    });
    setFormErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSendError(false);
    setIsSending(true);

    try {
      const breakdown = getSelectedBreakdown(selectedItemIds, itemGroups);
      const messageBody = buildEnquiryMessage({
        categoryLabel: category?.label ?? '',
        tierLabel: tier?.label ?? '',
        breakdown,
        total,
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: STUDIO_EMAIL,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          location: formData.location,
          occasion_type: category?.label ?? '',
          message: messageBody,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  // The total bar is `fixed` to the viewport bottom while visible, so the
  // step content needs matching bottom padding to avoid being covered by it.
  const showStickyBar = currentStepIndex >= 1 && !submitted;

  return (
    <div className={showStickyBar ? 'pb-24' : undefined}>
      {currentStepIndex === 0 && <CategoryStep onSelectCategory={handleSelectCategory} />}

      {currentStepIndex === 1 && (
        <TierStep categoryId={categoryId} tierId={tierId} onSelectTier={handleSelectTier} />
      )}

      {currentStepIndex === 2 && (
        <ItemsStep categoryId={categoryId} selectedItemIds={selectedItemIds} onToggleItem={handleToggleItem} />
      )}

      {currentStepIndex === 3 && (
        <FinalStep
          categoryLabel={category?.label ?? ''}
          tierLabel={tier?.label ?? ''}
          itemGroups={itemGroups}
          selectedItemIds={selectedItemIds}
          total={total}
          todayIso={todayIso}
          formData={formData}
          formErrors={formErrors}
          onFieldChange={handleFieldChange}
          onFieldBlur={handleFieldBlur}
          onSubmit={handleSubmit}
          submitted={submitted}
          sendError={sendError}
        />
      )}

      {showStickyBar && (
        <StickyTotalBar
          total={total}
          itemCount={selectedItemIds.length}
          onBack={handleBack}
          primaryLabel={
            currentStepIndex === 3 ? (isSending ? 'Sending…' : 'Send Estimate') : 'Continue'
          }
          primaryType={currentStepIndex === 3 ? 'submit' : 'button'}
          primaryFormId={currentStepIndex === 3 ? 'estimator-contact-form' : undefined}
          onPrimaryClick={
            currentStepIndex === 1
              ? () => setCurrentStepIndex(2)
              : currentStepIndex === 2
              ? () => setCurrentStepIndex(3)
              : undefined
          }
          primaryDisabled={(currentStepIndex === 1 && !tierId) || (currentStepIndex === 3 && isSending)}
        />
      )}
    </div>
  );
}

export default PackageEstimator;
