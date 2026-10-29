function AboutVideo() {
  return (
    <section className="w-full bg-white py-16 -mb-25">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/girl (1).png"
              alt="Importance of taking care of yourself"
              className="w-full max-w-[695px] h-auto object-contain"
            />
          </div>


          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">

            <h2
              className="
                text-[38px]
                sm:text-[42px]
                lg:text-[46px]
                xl:text-[48px]
                font-bold
                text-black
                leading-[1.12]
                tracking-tight
                max-w-[620px]
              "
            >
              The Importance To Take
              <br />
              Care
              <br />
              Of Yourself
            </h2>


            <p
              className="
                mt-7
                text-[16px]
                sm:text-[17px]
                lg:text-[18px]
                text-gray-600
                leading-[1.8]
                max-w-[680px]
              "
            >
              The Importance To Take Care Of Yourself. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Id nam obcaecati sequi odio
              dolore officia magni reiciendis, architecto, eos, aut
              asperiores reprehenderit quas rerum omnis facilis quam eius
              doloribus maxime!
            </p>


            {/* EXPLORE BUTTON */}
            <button
              className="
                mt-7
                w-[160px]
                h-[48px]
                bg-orange-500
                hover:bg-orange-600
                text-white
                text-[16px]
                font-semibold
                rounded-lg
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Explore More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutVideo;