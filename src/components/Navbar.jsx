import { useState } from "react";
import { appleImg } from "../utils";
import { navLists } from "../constants";
import { scrollToSection } from "../utils/animations";
import SearchModal from "./SearchModal";
import DropdownMenu from "./DropdownMenu";
import ReduceMotionButton from "./ReduceMotionButton";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu
    document.body.classList.toggle("no-scroll", !isMobileMenuOpen);
  };

  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Blur overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          activeNav !== null || isMobileMenuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <header className="relative w-full h-full z-40 py-3 mb-8 sm:px-10 px-5 justify-center items-center bg-neutral-900">
        <div className="flex justify-between md:justify-center items-center w-full relative">
          {/* <a
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="items-center flex justify-start"
          >
            <img src={appleImg} alt="Apple" width={14} height={18} />
          </a> */}
          {/* <ReduceMotionButton /> */}

          {/* Hamburger Menu for Mobile */}
          <button
            className="block sm:hidden text-white"
            onClick={() => {
              handleMobileMenuToggle();
              setActiveNav(null);
            }}
            aria-label="Toggle Mobile Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed top-0 right-0 h-full bg-neutral-900 w-5/6 max-w-xs transform transition-transform duration-300 z-50 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-5 flex flex-col h-full">
              {/* Close Button */}
              <button
                className="self-end text-white mb-4"
                onClick={() => {
                  handleMobileMenuToggle();
                  setActiveNav(null);
                }}
                aria-label="Close Mobile Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {/* Navigation Items */}
                {navLists.map((nav, index) => (
                  <div
                    key={nav.name}
                    className="px-4 transition-all items-center group h-full cursor-pointer relative"
                    onMouseEnter={() => setActiveNav(index)}
                  >
                    <div className="h-full group-hover:border-b-2 group-hover:border-white">
                      <a
                        className="h-full px-4 flex items-center text-sm text-gray group-hover:text-white transition-colors"
                        onClick={() => {
                          setActiveNav(null);
                          setTimeout(scrollToSection(nav.name), 500);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("no-scroll");
                        }}
                      >
                        {nav.name}
                      </a>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Desktop Navigation (visible only on larger screens) */}
          <nav
            className="hidden sm:flex w-full h-full justify-center max-sm:hidden items-center"
            onMouseLeave={() => setActiveNav(null)}
          >
            {/* Navigation Items */}
            {navLists.map((nav, index) => (
              <div
                key={nav.name}
                className="px-4 transition-all items-center group h-full cursor-pointer relative"
                onMouseEnter={() => setActiveNav(index)}
              >
                <div className="h-full w-full group-hover:border-b-2 group-hover:border-white">
                  <a
                    className="h-full px-4 flex items-center text-sm text-gray group-hover:text-white"
                    onClick={() => {
                      setActiveNav(null);
                      setTimeout(scrollToSection(nav.name), 500);
                    }}
                  >
                    {nav.name}
                  </a>
                </div>

                {/* Dropdown Menu */}
                <DropdownMenu
                  nav={{ ...nav, index }}
                  activeNav={activeNav}
                  activeSubMenuIndex={activeSubMenuIndex}
                  setActiveSubMenuIndex={setActiveSubMenuIndex}
                />
              </div>
            ))}
          </nav>

          <div
            className="flex items-baseline justify-end max-sm:justify-center max-sm:flex-1"
            onClick={() => setActiveNav(null)}
          >
            <SearchModal />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
