import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeUp, slideLeft } from "../utility/animations";
import { btnPrimary, container, sectionPadding } from "./ui";

const highlights = [
  "Certified expert trainers",
  "Modern, premium equipment",
  "Flexible class schedules",
  "Nutrition & diet guidance",
];

function AboutGirl() {
  return (
    <section id="about" className={`bg-mist ${sectionPadding}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* IMAGE */}
        <motion.div
          variants={slideLeft(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <img
            src="/girl.png"
            alt="Woman stretching after a workout"
            width="855"
            height="770"
            loading="lazy"
            className="h-auto w-full"
          />

          <div className="absolute top-4 right-0 rounded-2xl bg-ink px-5 py-4 text-white shadow-2xl sm:top-8 sm:right-4 sm:px-6">
            <p className="font-display text-3xl font-bold text-orange-400 sm:text-4xl">10+</p>
            <p className="text-xs text-gray-300 sm:text-sm">Years of experience</p>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Take care of your body. It’s the only place you have to live."
            description="At Coders Gym we combine science-backed training with a supportive community. Whether you are just starting out or chasing a new personal best, our coaches build a plan that fits your life."
          />

          <motion.ul
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium text-ink">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                  <FiCheck size={16} />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10"
          >
            <a href="#programs" className={`${btnPrimary} px-8 py-4`}>
              Discover Programs <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutGirl;
