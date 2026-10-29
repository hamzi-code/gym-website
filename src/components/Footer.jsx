import {
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

const textStyle = {
  fontFamily,
  fontWeight: 400,
  fontStyle: "normal",
  color: "oklch(0.872 0.01 258.338)",
  fontSize: "16px",
  lineHeight: "28px",
};

const linkStyle = {
  fontFamily,
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "28px",
};

const headingStyle = {
  fontFamily,
  fontWeight: 700,
  fontStyle: "normal",
  color: "rgb(255, 255, 255)",
  fontSize: "24px",
  lineHeight: "32px",
};

function Footer() {
  return (
    <footer className="w-full bg-white pt-7">

      {/* FOOTER BOX */}
      <div
        className="
          w-full
          bg-[#0a0f1d]
          text-white
          rounded-t-[55px]
          px-8
          sm:px-10
          lg:px-12
          pt-16
          pb-10
        "
      >

        {/* MAIN CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
            lg:gap-10
          "
        >

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <img
                src="/1st.png"
                alt="Coders Gym"
                className="w-[48px] h-[48px] object-contain"
              />

              <h2
                className="text-[30px] leading-[37px]"
                style={{
                  fontFamily,
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "rgb(255, 255, 255)",
                }}
              >
                CODERS{" "}
                <span className="text-orange-500">GYM</span>
              </h2>

            </div>

            {/* DESCRIPTION */}
            <p
              className="mt-6 max-w-[390px]"
              style={textStyle}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              placeat quaerat doloribus odit perferendis autem blanditiis,
              nihil pariatur iusto accusamus.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-7 mt-7">

              {/* LOCATION */}
              <FaMapMarkerAlt
                className="
                  text-white
                  text-[31px]
                  cursor-pointer
                  hover:scale-125
                  transition-transform
                  duration-300
                "
              />

              {/* INSTAGRAM */}
              <FaInstagram
                className="
                  text-white
                  text-[32px]
                  cursor-pointer
                  hover:scale-125
                  transition-transform
                  duration-300
                "
              />

              {/* FACEBOOK */}
              <FaFacebookF
                className="
                  text-white
                  text-[31px]
                  cursor-pointer
                  hover:scale-125
                  transition-transform
                  duration-300
                "
              />

              {/* LINKEDIN */}
              <FaLinkedinIn
                className="
                  text-white
                  text-[31px]
                  cursor-pointer
                  hover:scale-125
                  transition-transform
                  duration-300
                "
              />

            </div>
          </div>


          {/* IMPORTANT LINKS */}
          <div>

            <h3
              className="mb-7"
              style={headingStyle}
            >
              Important Links
            </h3>

            <ul className="space-y-5">

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Home
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                About
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Services
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Login
              </li>

            </ul>
          </div>


          {/* COMPANY LINKS */}
          <div>

            <h3
              className="mb-7"
              style={headingStyle}
            >
              Company Links
            </h3>

            <ul className="space-y-5">

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Our Services
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Contact
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Privacy Policy
              </li>

            </ul>
          </div>


          {/* RESOURCES */}
          <div>

            <h3
              className="mb-7"
              style={headingStyle}
            >
              Resources
            </h3>

            <ul className="space-y-5">

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Home
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                About
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Services
              </li>

              <li
                className="
                  text-gray-400
                  cursor-pointer
                  hover:text-orange-500
                  transition-colors
                  duration-300
                "
                style={linkStyle}
              >
                Login
              </li>

            </ul>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-14"></div>


        {/* COPYRIGHT */}
        <div className="text-center pt-7">

          <p style={textStyle}>
            © Copyright 2024 The Coding Journey
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;