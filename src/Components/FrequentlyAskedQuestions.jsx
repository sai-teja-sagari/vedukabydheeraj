'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const QUESTIONS = [
  {
    question: 'Do you travel outside Tandur?',
    answer:
      'Yes. We are based in Tandur, Telangana, and are available for photography and cinematography assignments outside Tandur as well. Travel arrangements can be discussed based on the location and event requirements.',
  },
  {
    question: 'Do you cover weddings outside Tandur?',
    answer:
      'Yes, we can cover weddings and events in Hyderabad and other locations based on availability. Share your event date and venue with us, and we\'ll help you with availability and package details.',
  },
  {
    question: 'How many photographers are included?',
    answer:
      'The number of photographers depends on the type, size, and requirements of your event. We can recommend the right team size based on your guest count, number of events, and coverage requirements.',
  },
  {
    question: 'Do you provide wedding cinematography?',
    answer:
      'Yes. We offer wedding cinematography to capture the emotions, celebrations, rituals, and memorable moments of your special day through cinematic films and videos.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery time depends on the type and scale of the event, as well as the selected package. We will share the expected delivery timeline when finalizing your booking.',
  },
  {
    question: 'Do you offer albums?',
    answer:
      'Yes, wedding albums can be included based on the package you choose. Album options, design, and customization can be discussed during the booking process.',
  },
  {
    question: 'How do I check availability?',
    answer:
      'Simply contact us through WhatsApp, phone, email, or the enquiry form on our website. Share your event date, location, and event type, and we\'ll check availability and get back to you.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'We recommend booking as early as possible, especially for weddings and popular dates. Once you have your event date and venue, you can contact us to check availability and reserve your date.',
  },
];

export default function FrequentlyAskedQuestions() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#FBF6EC] px-6 py-14 font-[Poppins] lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-[900px]">
        <h2
          id="faq-heading"
          className="font-[Playfair_Display] text-[26px] font-bold leading-tight text-[#241C12] lg:text-[36px]"
        >
          Frequently Asked Questions
        </h2>
        <dl className="mt-6 border-t border-[#DCC98F]">
          {QUESTIONS.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div key={question} className="border-b border-[#DCC98F]">
                <dt>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="grid w-full grid-cols-[22px_minmax(0,1fr)_20px] items-start gap-4 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9C7620]"
                  >
                    <span className="pt-0.5 font-[Playfair_Display] text-base font-bold leading-tight text-[#B48A13]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-[Playfair_Display] text-[19px] font-bold leading-snug text-[#17130E] lg:text-[24px]">
                      {question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`mt-0.5 h-5 w-5 text-[#241C12] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </dt>
                <dd
                  id={answerId}
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="grid grid-cols-[22px_minmax(0,1fr)_20px] gap-4 pb-8"
                >
                  <span aria-hidden="true" />
                  <p className="font-[Playfair_Display] text-base leading-[1.8] text-[#6B5130] lg:text-[19px]">
                    {answer}
                  </p>
                  <span aria-hidden="true" />
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}