function Navbar() {
  return (
    <nav className="w-full h-[80px] bg-white border-b border-gray-200">
      <div className="w-full h-full px-12 flex items-center">

        {/* LEFT */}
        <div className="flex items-center">
          <img
            src="/1st.png"
            alt="Coders Gym"
            className="w-9 h-9 object-contain"
          />

          <h1 className="ml-1 text-[27px] font-bold text-black whitespace-nowrap">
            CODERS{" "}
            <span className="text-orange-500">GYM</span>
          </h1>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-10 text-[17px] text-gray-700 font-[500]">

            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Home
            </li>

            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Trainer
            </li>

            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Program
            </li>

            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Blogs
            </li>

            <li className="cursor-pointer hover:text-orange-500 transition-colors duration-300">
              Pricing
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* SEARCH ICON */}
          <img
            src="/2nd.png"
            alt="Search"
            className="
              w-7
              h-7
              object-contain
              cursor-pointer
              hover:scale-105
              transition-transform
              duration-300
            "
          />

          {/* CART ICON */}
          <img
            src="/3rd.png"
            alt="Cart"
            className="
              w-8
              h-8
              object-contain
              cursor-pointer
              hover:scale-105
              transition-transform
              duration-300
            "
          />

          {/* LOGIN */}
          <button
            className="
              w-[120px]
              h-[48px]
              rounded-[10px]
              border-2
              border-orange-500
              bg-white
              text-orange-500
              text-[17px]
              font-medium
              hover:bg-orange-500
              hover:text-white
              transition-all
              duration-300
              cursor-pointer
            "
          >
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;