'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ServiceFaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return faqs.map(({ q, a }, index) => {
    const isOpen = openIndex === index;
    const questionId = `service-faq-question-${index}`;
    const answerId = `service-faq-answer-${index}`;

    return (
      <div
        key={q}
        className="border-b border-[#DCC98F] py-5 first:pt-0 last:border-b-0"
      >
        <h3>
          <button
            id={questionId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={answerId}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            className="flex w-full cursor-pointer items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C7620]"
          >
            <span className="flex gap-3">
              <span className="mt-0.5 text-[11px] font-bold text-[#C9A227]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-[#241C12] lg:text-base">{q}</span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className={`mt-1 h-4 w-4 shrink-0 text-[#241C12] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </h3>
        <p
          id={answerId}
          aria-labelledby={questionId}
          hidden={!isOpen}
          className="mt-3 pl-[26px] text-[13px] leading-[1.7] text-[#6B5A42]"
        >
          {a}
        </p>
      </div>
    );
  });
}