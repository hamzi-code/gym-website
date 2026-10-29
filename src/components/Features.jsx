import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { GiMeditation, GiMuscleUp, GiRunningShoe, GiWhistle } from "react-icons/gi";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../utility/animations";
import { container, sectionPadding } from "./ui";

const features = [
  {
    icon: GiMeditation,
    title: "Yoga & Mobility",
    desc: "Guided flows that improve flexibility, posture and mental focus for every level.",
  },
  {
    icon: GiMuscleUp,
    title: "Strength Training",
    desc: "Progressive programs and premium free weights designed to build real muscle.",
  },
  {
    icon: GiRunningShoe,
    title: "Cardio & HIIT",
    desc: "High-energy sessions that boost endurance, burn fat and keep you motivated.",
  },
  {
    icon: GiWhistle,
    title: "Personal Coaching",
    desc: "One-on-one guidance from certified trainers, tailored to your personal goals.",
  },
];

function Features() {
  return (
    <section id="services" className={`bg-white ${sectionPadding}`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Our Services"
          title="What we offer for you"
          description="Everything you need to transform your body and mind — under one roof, with experts by your side."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-[translate,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={28} />
                </span>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">{desc}</p>

                <a
                  href="#programs"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600"
                >
                  Learn more
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
