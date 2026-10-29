const products = [
  { img: "/shoe.png", title: "Yoga", category: "Yoga" },
  { img: "/sit.png", title: "Dumbbells", category: "Fitness" },
  { img: "/master.png", title: "Yoga Mat", category: "Yoga" },
  { img: "/things.png", title: "Fitness Ball", category: "Fitness" },
  { img: "/shoe.png", title: "Yoga", category: "Yoga" },
  { img: "/sit.png", title: "Dumbbells", category: "Fitness" },
  { img: "/master.png", title: "Yoga Mat", category: "Yoga" },
];

function ProductsGrid() {
  return (
    <section className="py-12 bg-white -mb-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            What We Offer For You
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, quisquam.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((p, i) => (
            <div
              key={i}
             className="
  bg-white
  rounded-xl
  overflow-hidden
  border
  border-gray-200
  hover:-translate-y-1
  hover:shadow-[0_6px_18px_rgba(0,0,0,0.10)]
  transition-all
  duration-300
  ease-out
  flex
  flex-col
  cursor-pointer
"
            >

              {/* IMAGE */}
              <div className="w-full h-56 bg-[#f8f9fa] flex items-center justify-center p-2 overflow-hidden">

                <img
                  src={p.img}
                  alt={p.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-lg
                  "
                />

              </div>

              {/* TEXT */}
              <div className="p-5">

                <h3 className="text-xl font-bold text-gray-900">
                  {p.title}
                </h3>

                <p className="text-base text-gray-500 mt-1">
                  {p.category}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;