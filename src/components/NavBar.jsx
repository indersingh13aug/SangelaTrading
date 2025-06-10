import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = {
  "Home Appliances": ["Refrigerators", "Washing Machines"],
  "Cooling Appliance": ["Air Conditioners"],
  "Television": ["LED TVs", "OLED TVs"],
  "Audio": ["Speakers"],
  "Security": ["CCTV"],
  "Water Purifier": ["RO"],
};

export default function NavBar({ onSubMenuClick }) {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef();
  const { cartItems } = useCart();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (category) => {
    setOpenMenu((prev) => (prev === category ? null : category));
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 sticky top-0 z-50 shadow-md" ref={menuRef}>
      <ul className="flex flex-wrap gap-6 items-center">
        {/* 1. About - FIRST */}
        <li>
          <Link to="/about" className="font-semibold hover:text-red-300">
            About
          </Link>
        </li>

        {/* 2. Dynamic Menu - MIDDLE */}
        {Object.entries(navItems).map(([category, subItems]) => (
          <li key={category} className="relative">
            <button
              onClick={() => toggleMenu(category)}
              className="font-semibold hover:text-blue-300 focus:outline-none"
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
                      setOpenMenu(null);
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

        {/* 3. Contact Us - LAST */}
        <li>
          <Link to="/contact" className="font-semibold hover:text-green-300">
            Contact Us
          </Link>
        </li>

        {/* 4. Cart Icon */}
        <li>
          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
