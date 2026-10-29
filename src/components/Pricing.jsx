import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../utility/animations";
import { btnOutline, btnPrimary, container, sectionPadding } from "./ui";

const YEARLY_DISCOUNT = 0.2;

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started on your fitness journey.",
    monthly: 29,
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "1 group class per week",
      "Fitness tracking app",
    ],
  },
  {
    name: "Pro",
    desc: "Our most popular plan for consistent, visible progress.",
    monthly: 49,
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "2 personal training sessions / month",
      "Custom nutrition plan",
      "Monthly guest pass",
    ],
  },
  {
    name: "Elite",
    desc: "Complete premium coaching for serious results.",
    monthly: 89,
    features: [
      "Everything in Pro",
      "Weekly 1-on-1 coaching",
      "Body composition analysis",
      "Recovery zone & sauna",
      "Priority class booking",
    ],
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const priceFor = (monthly) =>
    yearly ? Math.round(monthly * (1 - YEARLY_DISCOUNT)) : monthly;

  return (
    <section id="pricing" className={`bg-white ${sectionPadding}`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans, real results"
          description="No hidden fees, no long-term lock-ins. Pick the plan that fits your goals and upgrade any time."
        />

        {/* BILLING TOGGLE */}
        <div className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 p-1"
          >
            {[
              { label: "Monthly", value: false },
              { label: "Yearly", value: true },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                aria-pressed={yearly === option.value}
                onClick={() => setYearly(option.value)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  yearly === option.value
                    ? "bg-white text-ink shadow-sm"
                    : "text-gray-500 hover:text-ink"
                }`}
              >
                {option.label}
                {option.value && (
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-bold text-orange-600">
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PLANS */}
        <div className="mx-auto mt-12 grid max-w-md gap-6 md:max-w-none md:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className={plan.popular ? "lg:-my-5" : ""}
            >
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-ink text-white shadow-2xl shadow-orange-500/20 ring-2 ring-orange-500 lg:py-12"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold tracking-wide whitespace-nowrap text-white uppercase">
                    Most popular
                  </span>
                )}

                <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : ""}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                <p className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-extrabold tracking-tight ${
                      plan.popular ? "text-white" : "text-ink"
                    }`}
                  >
                    ${priceFor(plan.monthly)}
                  </span>
                  <span className={plan.popular ? "text-gray-400" : "text-gray-500"}>/month</span>
                </p>
                <p className={`mt-1 h-5 text-xs ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {yearly ? `Billed $${priceFor(plan.monthly) * 12} yearly` : "Billed monthly"}
                </p>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px]">
                      <FiCheck
                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-orange-400" : "text-orange-500"}`}
                        size={18}
                      />
                      <span className={plan.popular ? "text-gray-200" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`${plan.popular ? btnPrimary : btnOutline} mt-10 w-full py-3.5`}
                >
                  Choose {plan.name}
                </a>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
