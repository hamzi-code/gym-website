import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { slideLeft, slideRight } from "../utility/animations";
import { btnPrimary, container } from "./ui";

const stats = [
  { value: "15K+", label: "Active members" },
  { value: "50+", label: "Expert trainers" },
  { value: "4.9★", label: "Member rating" },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      {/* DECORATIVE GLOWS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-orange-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-amber-100/70 blur-3xl"
      />

      <div className={`${container} relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10`}>
        {/* LEFT: COPY */}
        <motion.div
          variants={slideLeft(0.1)}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-1.5 text-xs font-semibold text-orange-600 shadow-sm sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>
            New memberships now open
          </span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Gym gives you the{" "}
            <span className="relative inline-block text-orange-500">
              perfect health
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-orange-300"
              >
                <path
                  d="M2 9C60 3 140 1 298 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
            Train with certified coaches, premium equipment and personalised programs
            designed to help you get stronger, move better and feel your best — every
            single day.
          </p>

          <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#pricing" className={`${btnPrimary} w-full px-8 py-4 text-base sm:w-auto`}>
              Get Started <FiArrowRight />
            </a>

            <a
              href="#video"
              className="group inline-flex items-center gap-3 text-base font-semibold text-ink transition-colors hover:text-orange-600"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-lg shadow-orange-500/15 transition-transform duration-300 group-hover:scale-110">
                <FiPlay className="ml-0.5" />
              </span>
              Watch Video
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-orange-200/60 pt-8 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          variants={slideRight(0.25)}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
        >
          <img
            src="/A.png"
            alt="Chrome dumbbells surrounded by fitness analytics cards"
            width="582"
            height="428"
            fetchPriority="high"
            className="h-auto w-full drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
