import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { logo } from "../assets/icons";
import { PrimaryButton } from "./PrimaryButton";
import { menu } from "../assets/icons";

export const Navbar = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeSticky = scrollPosition >= window.innerHeight;
      setIsHeaderSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const [navOpen, setNavOpen] = useState(false);

  const handleOpenMenu = (event) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };

  return (
    <header className={`w-full  z-40 transition-all  ${location.pathname == "/" ? ' bg-white-smoke ' : 'bg-white '} ${isHeaderSticky ? 'sticky top-0 shadow-md' : ''}`}>
      <nav className={`flex justify-between items-center max-container h-[100px] padding-x lg:px-0 z-20`}>
        <Link to="/" ><img className="w-[50px] h-fit" src={logo} alt="dentist logo" /></Link>
        <div className="flex gap-6 items-center">
          <ul
            className={`z-20 nav-container absolute lg:relative lg:bottom-0 lg:w-fit flex flex-col lg:flex-row w-full gap-10 padding-x left-0 lg:bg-transparent bg-primary ${
              navOpen ? "top-[100px] shadow-xl" : "bottom-full"
            } lg:shadow-none py-10`}
          >
            {navLinks.map((link) => (
              <li
                className="text-lg font-bold lg:font-normal lg:text-md lg:text-gray-text lg:hover:text-primary"
                key={link.name}
              >
                {link.name === "Services" ? (
                  <DropdownMenu items={link.dropdownItems} isMobile={true} />
                ) : (
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      isActive 
                        ? 'text-white font-bold lg:text-primary lg:font-medium bg-primary-dark bg-opacity-30 py-1 px-3 rounded-md lg:bg-transparent lg:p-0 lg:rounded-none'
                        : 'text-white/90 hover:text-white lg:text-gray-text lg:hover:text-primary'
                    }
                  >
                    {link.name}
                  </NavLink>
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
    </header>
  );
};

const DropdownMenu = ({ items, isMobile = false }) => {
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
        className="inline-flex items-center text-lg font-bold lg:text-gray-text lg:font-normal lg:text-md lg:hover:text-primary text-white/90 hover:text-white"
        onClick={toggleDropDown}
      >
        Services
        <svg
          className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="w-full text-white bg-primary lg:absolute lg:top-14 lg:left-1/2 lg:-translate-x-1/2 lg:w-56 mt-2 origin-top-right lg:bg-white lg:rounded-md lg:shadow-lg">
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
                className="block px-4 py-3 lg:text-sm text-lg font-medium text-white/90 hover:text-white hover:bg-primary-dark/30 lg:text-gray-700 lg:hover:text-primary lg:hover:bg-light-green-bg"
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
