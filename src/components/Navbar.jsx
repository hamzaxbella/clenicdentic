import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo } from "../assets/icons";
import { PrimaryButton } from "./PrimaryButton";
import { menu } from "../assets/icons";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navOpen && !event.target.closest(".nav-container")) {
        setNavOpen(false);
      }
    };

    const handleScroll = () => {
      if (navOpen) {
        setNavOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navOpen]);

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };

  return (
    <nav className="flex  justify-between items-center max-container h-[100px]  padding-x lg:px-0 z-20">
      <img className="w-[50px] h-fit" src={logo} alt="dentist logo" />
      <div className="flex gap-6 items-center">
        <ul
          className={`z-20 nav-container absolute lg:relative lg:bottom-0 lg:w-fit flex flex-col lg:flex-row  w-full gap-10 padding-x  left-0 lg:bg-transparent bg-primary ${
            navOpen ? "top-[100px] shadow-xl" : "bottom-full"
          }  lg:shadow-none py-10`}
        >
          {navLinks.map((link) => (
            <li
              className="text-lg text-white lg:text-gray-text font-bold lg:font-normal lg:text-md lg:hover:text-primary"
              key={link.name}
            >
              {link.name === "Services" ? (
                <DropdownMenu items={link.dropdownItems} />
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}
            </li>
          ))}
        </ul>

        <PrimaryButton />
        <img
          src={menu}
          width={25}
          height={25}
          onClick={handleOpenMenu}
          alt="nav menu icon"
          className="lg:hidden"
        />
      </div>
    </nav>
  );
};

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Adjust the delay as needed (200 milliseconds in this case)
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="inline-flex items-center text-lg text-white font-bold lg:text-gray-text lg:font-normal lg:text-md lg:hover:text-primary"
        onClick={toggleDropDown}
      >
        Services
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 14a1 "
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="w-full text-white bg-primary lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-56 mt-2 origin-top-right lg:bg-white lg:rounded-md lg:shadow-lg ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => (
              <Link
                to={item.path} // Use item.path instead of item.href
                key={item.name}
                className="block px-4 py-2 lg:text-sm text-lg font-medium text-white lg:text-gray-700 hover:bg-light-green-bg"
                role="menuitem"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
