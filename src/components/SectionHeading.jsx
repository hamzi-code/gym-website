import { motion } from "framer-motion";
import { fadeUp } from "../utility/animations";

function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <motion.div
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 px-3.5 py-1 text-xs font-semibold tracking-wider text-orange-600 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          {eyebrow}
        </span>
      )}

      <h2
        className={`mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
