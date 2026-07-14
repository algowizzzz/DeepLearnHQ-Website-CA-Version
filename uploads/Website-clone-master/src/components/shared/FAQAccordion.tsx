"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="px-4 py-20 md:px-8 lg:px-16"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto max-w-4xl">
        <h2
          className="mb-12 text-center leading-[1.08]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            color: "#000000",
            letterSpacing: "-0.02em",
          }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden"
                style={{
                  borderRadius: "16px",
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#ffffff",
                  boxShadow:
                    "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#f5f5f5]"
                >
                  <span
                    className="pr-4 text-base font-medium"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      color: "#000000",
                      letterSpacing: "0.16px",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ color: "#777169" }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "24rem" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <p
                    className="px-6 pb-5 leading-relaxed"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      color: "#4e4e4e",
                      fontSize: "15px",
                      letterSpacing: "0.16px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
