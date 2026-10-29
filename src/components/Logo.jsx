import { FaDumbbell } from "react-icons/fa";

function Logo({ light = false, onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="flex shrink-0 items-center gap-2.5"
      aria-label="Coders Gym – back to top"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/30">
        <FaDumbbell size={18} className="-rotate-45" />
      </span>
      <span
        className={`font-display text-xl font-extrabold tracking-tight whitespace-nowrap sm:text-2xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        CODERS <span className="text-orange-500">GYM</span>
      </span>
    </a>
  );
}

export default Logo;
