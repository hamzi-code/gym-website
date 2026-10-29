import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../utility/animations";
import { container, sectionPadding } from "./ui";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member since 2022",
    initials: "SJ",
    quote:
      "The coaches here genuinely care. In six months I lost 12 kg, gained strength I never thought I had, and actually look forward to every session.",
  },
  {
    name: "Michael Chen",
    role: "Marathon runner",
    initials: "MC",
    quote:
      "The cardio and strength programs took my running to another level. I set a new personal best this year — the structured plans make all the difference.",
  },
  {
    name: "Emily Carter",
    role: "Yoga enthusiast",
    initials: "EC",
    quote:
      "A clean, welcoming space with amazing yoga classes. The community keeps me consistent and my flexibility and stress levels have improved so much.",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className={`bg-cream ${sectionPadding}`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our members are saying"
          description="Real stories from real people who transformed their lives with Coders Gym."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-orange-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400" aria-label="Rated 5 out of 5">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} size={16} />
                  ))}
                </div>
                <FaQuoteLeft className="text-orange-200" size={28} aria-hidden="true" />
              </div>

              <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-gray-600 sm:text-base">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 font-display text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-display font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
