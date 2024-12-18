import { Link } from "react-router-dom";

const btnStyles = `hover:text-red text-white focus bg-red border-6  p-1.5 px-6 py-2 rounded-full `;

function NavButtons() {
  return (
    
      <button className={btnStyles}>
      <Link
          to="/contact"
          className="mr-2 flex items-center justify-between gap-2 text-sm font-bold uppercase text-white outline-none"
        >
        Join us now
        </Link>
      </button>
    
  );
}

export default NavButtons;
