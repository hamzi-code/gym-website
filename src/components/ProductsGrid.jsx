import { motion } from "framer-motion";
import { FiArrowRight, FiBarChart2, FiClock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeUp } from "../utility/animations";
import { btnOutline, container, sectionPadding } from "./ui";

const programs = [
  {
    img: "/things.png",
    title: "Strength Training",
    category: "Fitness",
    duration: "12 weeks",
    level: "All levels",
  },
  {
    img: "/master.png",
    title: "Sunrise Yoga Flow",
    category: "Yoga",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    img: "/shoe.png",
    title: "Cardio & Endurance",
    category: "Cardio",
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    img: "/sit.png",
    title: "Mindful Meditation",
    category: "Wellness",
    duration: "4 weeks",
    level: "Beginner",
  },
];

function ProductsGrid() {
  return (
    <section id="programs" className={`bg-white ${sectionPadding}`}>
      <div className={container}>
        {/* HEADING */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Programs"
            title="Explore our popular programs"
            description="Structured plans built by our coaches to help you reach your goals faster — whatever your starting point."
          />
          <a href="#pricing" className={`${btnOutline} shrink-0 self-start md:self-auto`}>
            View all programs <FiArrowRight />
          </a>
        </div>

        {/* CARDS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-[translate,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur">
                    {p.category}
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{p.title}</h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FiClock className="text-orange-500" /> {p.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FiBarChart2 className="text-orange-500" /> {p.level}
                    </span>
                  </div>

                  <a
                    href="#pricing"
                    className="mt-6 inline-flex items-center gap-1.5 border-t border-gray-100 pt-5 text-sm font-semibold text-orange-600"
                  >
                    Join program
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;
