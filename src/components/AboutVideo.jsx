import { motion } from "framer-motion";
import { FiArrowRight, FiHeart, FiSmile, FiZap } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeUp, scaleIn } from "../utility/animations";
import { btnPrimary, container, sectionPadding } from "./ui";

const benefits = [
  {
    icon: FiHeart,
    title: "Healthier heart",
    desc: "Regular training lowers blood pressure and boosts long-term heart health.",
  },
  {
    icon: FiZap,
    title: "More energy",
    desc: "Feel sharper and more energised throughout your day — not just at the gym.",
  },
  {
    icon: FiSmile,
    title: "Better mood",
    desc: "Exercise reduces stress and anxiety while improving sleep quality.",
  },
];

function AboutVideo() {
  return (
    <section id="video" className={`bg-mist ${sectionPadding}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* IMAGE - LEFT */}
        <motion.div
          variants={scaleIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        >
          <img
            src="/video.png"
            alt="Woman meditating in a calm studio during a yoga session"
            width="781"
            height="607"
            loading="lazy"
            className="h-auto w-full mask-r-from-95% mask-b-from-95%"
          />
        </motion.div>

        {/* TEXT - RIGHT */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why It Matters"
            title="The importance of taking care of yourself"
            description="Your body is your most valuable asset. Investing a few hours each week in movement and recovery pays off in every area of life — from focus at work to energy with your family."
          />

          <motion.ul
            variants={fadeUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 space-y-5"
          >
            {benefits.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-gray-600">{desc}</p>
                </div>
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
            <a href="#pricing" className={`${btnPrimary} px-8 py-4`}>
              Explore More <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
