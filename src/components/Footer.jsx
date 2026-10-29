import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks } from "../data/navigation";
import { container } from "./ui";

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

const companyLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Membership", href: "#pricing" },
  { label: "Privacy Policy", href: "#contact" },
  { label: "Terms of Service", href: "#contact" },
];

const contactInfo = [
  { icon: FiMapPin, text: "123 Fitness Avenue, Lahore, Pakistan" },
  { icon: FiPhone, text: "+92 300 1234567", href: "tel:+923001234567" },
  { icon: FiMail, text: "hello@codersgym.com", href: "mailto:hello@codersgym.com" },
];

const linkClass = "text-[15px] text-gray-400 transition-colors duration-200 hover:text-orange-400";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="bg-ink text-gray-400">
      <div className={`${container} pt-16 pb-10 lg:pt-20`}>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* BRAND */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
              Expert coaching, premium equipment and a community that pushes you to be
              your best. Your transformation starts here.
            </p>

            <ul className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition-colors duration-200 hover:bg-orange-500 hover:ring-orange-500"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-6 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <ul className="mt-6 space-y-3.5">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-[15px]">
                  <Icon className="mt-1 shrink-0 text-orange-400" />
                  {href ? (
                    <a href={href} className={linkClass}>
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="mt-8">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-white">
                Subscribe to our newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600"
                >
                  <FiSend size={18} />
                </button>
              </div>
              <p role="status" className="mt-2 h-5 text-sm text-orange-400">
                {subscribed && "Thanks for subscribing! 🎉"}
              </p>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Coders Gym. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="transition-colors hover:text-orange-400">
              Privacy
            </a>
            <a href="#contact" className="transition-colors hover:text-orange-400">
              Terms
            </a>
            <a href="#home" className="transition-colors hover:text-orange-400">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
