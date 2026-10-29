import { motion } from "framer-motion";
import { featuresSlideLeft } from "../utility/animations";

const features = [
  {
    icon: "/men.png",
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
  },
  {
    icon: "/1st.png",
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
  },
  {
    icon: "/bag.png",
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
  },
];

function Features() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto -mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">

        {/* LEFT TEXT */}
        <div className="text-left">
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900"
            style={{
              fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
              fontWeight: 700,
            }}
          >
            What we offer
            <br />
            for you
          </h2>

          <p className="text-gray-500 mt-3 text-sm leading-relaxed">
            It is a long established fact that a reader readable.
          </p>
        </div>

        {/* FEATURE CARDS */}
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={featuresSlideLeft(i * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-[#f5f5f5]
              rounded-2xl
              p-6
              min-h-[200px]
              w-full
              max-w-[360px]
              shadow-sm
              hover:bg-white
              hover:shadow-[0_10px_30px_rgba(128,128,128,0.25)]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mb-4 object-contain"
            />

            <h3
              className="text-lg font-bold text-gray-900 mb-1"
              style={{
                fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
                fontWeight: 700,
              }}
            >
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;