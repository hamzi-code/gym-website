import { motion } from "framer-motion";
import { scaleIn, slideUp } from "../utility/animations";

function AboutVideo() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 -mb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* IMAGE - LEFT */}
          <div className="flex justify-center w-full md:order-1">
            <motion.img
              src="/video.png"
              alt="Gym"
              className="
                w-full
                max-w-md
                sm:max-w-lg
                lg:max-w-[600px]
                h-auto
                object-contain
              "
              variants={scaleIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            />
          </div>

          {/* TEXT - RIGHT */}
          <motion.div
            className="w-full md:order-2"
            variants={slideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {/* HEADING */}
            <h2
              className="text-[48px] leading-[60px] text-black font-semibold"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              The Importance To Take
              <br />
              Care
              <br />
              Of Yourself
            </h2>

            {/* PARAGRAPH */}
            <p
              className="mt-6 max-w-[680px]"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "32px",
                color: "oklch(0.446 0.03 256.802)",
              }}
            >
              The Importance To Take Care Of Yourself. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Id nam obcaecati sequi odio
              dolore officia magni reiciendis, architecto, eos, aut asperiores
              reprehenderit quas rerum omnis facilis quam eius doloribus
              maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae vero inventore assumenda ducimus alias doloribus.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-7
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-8
                py-3.5
                rounded-lg
                font-semibold
                text-base
                transition
                duration-300
                cursor-pointer

              "
            >
              Explore More
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutVideo;