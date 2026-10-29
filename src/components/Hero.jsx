import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../utility/animations";

function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden mb-10">
      <motion.div
        variants={slideLeft(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2 bg-[#FCF5EE] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-0"
      >
        <div className="w-full max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight text-gray-900">
            Gym Gives you the<br className="hidden sm:block" />
            perfect <span className="text-orange-500">Health</span>
          </h1>

          <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 max-w-lg">
            It is a long established fact that a reader will be by readable content of a page when are the best product.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12">
            <button className="bg-orange-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-orange-600 transition duration-300 font-bold cursor-pointer">
              Order Now
            </button>

            <button className="flex items-center justify-center sm:justify-start gap-3 text-base sm:text-lg lg:text-xl font-bold hover:text-orange-500 transition duration-300 cursor-pointer">
              Watch Now
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideRight(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center items-center bg-white px-5 sm:px-8 md:px-12 py-10 sm:py-14 lg:py-0"
      >
        <img
          alt="Gym Equipment"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[650px] h-auto object-contain"
          src="/A.png"
        />
      </motion.div>
    </section>
  );
}

export default Hero;