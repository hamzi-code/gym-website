import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "John Doe",
    image: "/sit.png",
  },
  {
    name: "Steve Smith",
    role: "Steve Smith",
    image: "/sit.png",
  },
  {
    name: "Kristen",
    role: "Kristen",
    image: "/sit.png",
  },
];

function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-white -mb-30">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-7">

        {/* HEADING */}
        <div className="mb-14">
          <h2
            className="text-[48px] leading-[60px] text-gray-900"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            What Are The Customer
            <br />
            Saying About Us
          </h2>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                bg-[#FFF4E8]
                rounded-[20px]
                px-8
                py-6
                h-[270px]
                shadow-[0_4px_8px_rgba(0,0,0,0.12)]
                flex
                flex-col
              "
            >

              {/* USER INFO */}
              <div className="flex items-center gap-5">

                <img
                  src={t.image}
                  alt={t.name}
                  className="
                    w-[70px]
                    h-[70px]
                    rounded-full
                    object-cover
                    flex-shrink-0
                  "
                />

                <div>
                  <h3
                    className="text-[24px] leading-[30px] text-gray-900"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </h3>

                  <p
                    className="text-[18px] leading-[26px] text-gray-600"
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {t.role}
                  </p>
                </div>

              </div>

              {/* REVIEW */}
              <p
                className="
                  mt-7
                  text-[16px]
                  leading-[29px]
                  text-gray-600
                "
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eaque reiciendis inventore iste ratione ex alias quis magni
                at optio.
              </p>

              {/* STARS */}
              <div className="flex items-center gap-[3px] mt-auto text-yellow-500 text-[20px]">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <span className="w-2 h-2 rounded-full bg-gray-700"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;