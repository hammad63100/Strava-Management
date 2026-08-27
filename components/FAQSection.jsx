"use client";

import React, { useState } from "react";

const faqData = [
  {
    q: "I already have a full-time job. How much of my time will this actually take?",
    a: "Less than you'd assume. You make the calls that matter — market, capital, objective — and review results. We run sourcing, launch, and daily operations. Most founder-partners give this a few focused hours a month, not a second job.",
  },
  {
    q: "I don't hold a US passport. Can I actually own a US Amazon business?",
    a: "Yes. Nationality has never been a barrier to forming a US company or owning an Amazon seller account. We coordinate formation, banking, and account setup remotely, wherever you're based.",
  },
  {
    q: "I'm in the US on a work visa. Will this put my status at risk?",
    a: "Passive ownership — where you hold the equity and we run daily operations — is generally compatible with visas like H-1B, L-1, and O-1, since you're not performing unauthorized work. Rules vary by individual visa, so we always recommend a quick check with your immigration attorney before we begin. It's the exact reason this model exists: you own it, we run it.",
  },
  {
    q: "How much capital do I actually need to start?",
    a: "It depends on the category — inventory, fees, ads, and working capital all factor in. You get a real number, not a round estimate, during Market Selection & Validation, before you commit anything.",
  },
  {
    q: "How do I know my money is actually safe with you?",
    a: "You keep control of your own bank account, Amazon seller account, and company — we never hold your capital. Every dollar moves through accounts you own and can see.",
  },
  {
    q: "Will I really own the brand, the account, and the business — or just be a client?",
    a: "You own all of it: the company, the trademark, the Amazon account, the inventory. We're your operating partner, not your landlord. Walk away, and you walk away with a business, not a cancelled subscription.",
  },
  {
    q: "I don't have a product idea. Can you still help me?",
    a: "That's where most founder-partners start. Market Selection & Validation exists to find the opportunity — we don't wait for you to bring one.",
  },
  {
    q: "What happens if the product doesn't sell?",
    a: "We don't launch what the numbers don't support. Every product clears a Viability Assessment first — landed cost, margin, break-even — and if it doesn't hold up, you hear that before you spend, not after.",
  },
  {
    q: "How is this different from a cheap freelancer or a $500 agency?",
    a: "A freelancer executes a task and moves on. We own the outcome — from the LLC to the P&L — with one experienced account analyst accountable for the whole business, not one function of it.",
  },
  {
    q: "Do I need to be in the US, or travel there, to make this work?",
    a: "No. We coordinate company formation, banking, and account setup remotely for founders based anywhere — the US, the Middle East, or elsewhere.",
  },
  {
    q: "What does my involvement actually look like once we're live?",
    a: "Reviewing recommendations, approving key decisions, and reading a report you can actually understand. The day-to-day — ads, inventory, listings, account health — is ours.",
  },
  {
    q: "How long until I see a return?",
    a: "It depends on the category and capital deployed. You get a realistic timeline during Viability Assessment — not a promise on a homepage.",
  },
  {
    q: "How do you get paid?",
    a: "Our structure depends on the scope and stage of the partnership. We lay it out plainly before you commit — no hidden markup on your ad spend or inventory.",
  },
  {
    q: "Can I exit if this isn't working for me?",
    a: "Yes. You own the company and the account, so you're never locked in. We'd rather build fewer businesses well than hold founders in ones that aren't working.",
  },
  {
    q: "Is this really a business asset, or just extra income?",
    a: "The goal is an asset — documented systems, a real earnings history, value that outlasts your involvement. Asset Enhancement runs alongside growth from day one, not as an afterthought before a sale.",
  },
  {
    q: "What if I want to build more than one brand eventually?",
    a: "Some founder-partners do exactly that. Portfolio expansion is part of the model — the same discipline, applied to a second evidence-led opportunity.",
  },
  {
    q: "Who do I actually talk to when I have a question?",
    a: "One experienced account analyst, assigned to your business. You get judgment, not a support queue.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="faq-section-custom mt-[100px] sm:mt-[140px] lg:mt-[180px] pt-[60px] lg:pt-[80px] pb-[100px] lg:pb-[140px]"
      style={{ color: "#5A2132" }}
    >
      <style>{`
        .faq-inner-container {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .faq-inner-container {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        .faq-header-wrap {
          border-bottom: 1px solid rgba(90, 33, 50, 0.25);
          padding-top: 40px;
          padding-bottom: 24px;
          margin-bottom: 0;
        }
        @media (min-width: 1024px) {
          .faq-header-wrap {
            padding-top: 65px;
            padding-bottom: 28px;
            margin-bottom: 0;
          }
        }

        .faq-accordion-item {
          border-bottom: 1px solid rgba(90, 33, 50, 0.22);
          transition: all 0.3s ease;
        }
        .faq-accordion-item:hover {
          border-bottom-color: rgba(90, 33, 50, 0.55);
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          gap: 20px;
          transition: all 0.25s ease;
        }
        @media (min-width: 1024px) {
          .faq-trigger {
            padding: 26px 0;
          }
        }

        .faq-question-text {
          font-family: var(--font-serif);
          font-size: 18px;
          font-weight: 700;
          line-height: 1.35;
          color: #5A2132;
          transition: color 0.25s ease;
        }
        @media (min-width: 768px) {
          .faq-question-text {
            font-size: 21px;
          }
        }
        @media (min-width: 1024px) {
          .faq-question-text {
            font-size: 22px;
          }
        }

        .faq-icon-box {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(90, 33, 50, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #5A2132;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-accordion-item.is-open .faq-icon-box {
          background-color: #5A2132;
          color: #E6DEC8;
          transform: rotate(45deg);
        }

        .faq-answer-wrap {
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-answer-text {
          padding-bottom: 26px;
          padding-right: 32px;
          font-size: 15px;
          line-height: 1.75;
          color: #5A2132;
          opacity: 0.9;
          font-weight: 500;
        }
        @media (min-width: 768px) {
          .faq-answer-text {
            font-size: 16px;
            padding-bottom: 30px;
          }
        }
      `}</style>

      <div className="faq-inner-container">
        {/* Header */}
        <div className="faq-header-wrap">
          <h2
            className="h2 uppercase font-bold text-[28px] sm:text-[38px] lg:text-[46px] leading-tight"
            style={{
              color: "#5A2132",
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.01em",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className="text-[13px] sm:text-[14px] font-extrabold opacity-60 shrink-0 font-serif"
                      style={{ color: "#5A2132" }}
                    >
                      {num}
                    </span>
                    <span className="faq-question-text">{item.q}</span>
                  </div>

                  <div className="faq-icon-box">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div
                  className="faq-answer-wrap"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="faq-answer-text pl-7 sm:pl-10">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
