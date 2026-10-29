import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp } from "../utility/animations";
import { container } from "./ui";

function DiscountBanner() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={container}>
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-orange-500 via-orange-500 to-orange-600 px-6 py-16 text-center shadow-2xl shadow-orange-500/30 sm:px-12 sm:py-20"
        >
          {/* DECORATIVE CIRCLES */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-28 -z-10 h-80 w-80 rounded-full bg-white/10"
          />

          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase">
            Limited time offer
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get 20% off your first membership. Are you ready?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-orange-50 sm:text-lg">
            We’ll make sure you get the right guidance and the best quality equipment for
            every workout. Start today and feel the difference.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Claim Offer <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-orange-600 sm:w-auto"
            >
              Stay In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DiscountBanner;
