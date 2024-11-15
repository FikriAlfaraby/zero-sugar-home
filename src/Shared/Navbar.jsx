import React, { useState, useEffect } from "react";

// react icons
import { CiSearch } from "react-icons/ci";

// utils
import { styles } from "../Utils/Styles.js";

// react router dom
import { Link } from "react-router-dom";
import Logo from "../Components/Home/Logo.jsx";

const Navbar = ({ active }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`items-center hidden lg:flex justify-between z-50 px-12 py-3 sticky top-0 bg-white transition-shadow ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <Logo />
      <ul className="flex items-center gap-[50px]">
        <li
          className={`${active === 1 ? "text-primary font-[600]" : ""} navItem`}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`${active === 2 ? "text-primary font-[600]" : ""} navItem`}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          tabIndex={0} // Add tabIndex to make it focusable
        >
          About Us
        </li>
        <li
          className={`${active === 3 ? "text-primary font-[600]" : ""} navItem`}
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          tabIndex={0} // Add tabIndex to make it focusable
        >
          Our Services
        </li>
      </ul>

      <div className="flex items-center gap-[20px]">
        <a
          href="https://zero-sugar-app.vercel.app/sign-in"
          className={`${styles.buttonPrimary}`}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
