import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Ensure this is imported
const navItems = {
  "Home Appliances": ["Refrigerators", "Washing Machines"],
  "Cooling Appliance": ["Air Conditioners"],
  "Television": ["LED TVs", "OLED TVs"],
  "Audio": ["Speakers"]
};

export default function NavBar({ onSubMenuClick }) {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null); // Close submenu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (category) => {
    setOpenMenu(prev => (prev === category ? null : category));
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 sticky top-0 z-50 shadow-md" ref={menuRef}>

      <ul className="flex flex-wrap gap-6 relative">

        {Object.entries(navItems).map(([category, subItems]) => (
          <li key={category} className="relative">
            <button
              onClick={() => toggleMenu(category)}
              className="font-semibold focus:outline-none"
            >
              {category}
            </button>

            {openMenu === category && (
              <ul className="absolute bg-white text-black mt-1 rounded shadow-md z-50">
                {subItems.map((subItem) => (
                  <li
                    key={subItem}
                    onClick={() => {
                      onSubMenuClick(subItem);
                      setOpenMenu(null); // Close menu after click
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <Link to="/about"
            className="font-semibold focus:outline-none"
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/contact"
            className="font-semibold focus:outline-none"
          >
            Contact Us
          </Link>
        </li>
        
      </ul>

    </nav>
  );
}
