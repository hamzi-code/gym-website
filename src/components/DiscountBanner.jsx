function DiscountBanner() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 -mb-8">
      <div
        className="
          w-full
          max-w-[1100px]
          mx-auto
          text-center
          bg-[#f5f5f5]
          px-6
          sm:px-10
          lg:px-14
          py-20
          sm:py-24
          rounded-[18px]
          shadow-sm
          border
          border-gray-100
        "
      >
        <h1
          className="text-[60px] leading-[75px] text-black max-w-[1050px] mx-auto"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
            fontWeight: 700,
            fontStyle: "normal",
          }}
        >
          Get 20% Discount On Your First
          <br />
          Order, Are You Ready To Buy
        </h1>

        <p
          className="mt-5 text-[16px] leading-[32px] text-gray-600 whitespace-nowrap mx-auto"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          We will make sure you get the right and the best quality products for your workout
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-10">
          <button className="w-[180px] bg-orange-500 text-white font-semibold px-8 py-4 rounded-[10px] hover:bg-orange-600 transition shadow-sm cursor-pointer">
            Learn More
          </button>

          <button className="w-[180px] bg-transparent border-2 border-orange-500 text-orange-500 font-semibold cursor-pointer px-8 py-4 rounded-[10px] hover:bg-orange-500 hover:text-white transition">
            Stay In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscountBanner;