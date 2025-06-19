import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold">eMart </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/about" className="font-semibold hover:text-red-300">
              About
            </Link>
          </li>
          {Object.entries(navItems).map(([category, subItems]) => (
            <li key={category} className="relative">
              <button
                onClick={() => toggleMenu(category)}
                className="font-semibold hover:text-blue-300"
              >
                {category}
              </button>
              {openMenu === category && (
                <ul className="absolute bg-white text-black mt-2 rounded shadow-md z-50">
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
          <li>
            <Link to="/contact" className="font-semibold hover:text-green-300">
              Contact Us
            </Link>
          </li>
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="space-y-4">
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white">
                About
              </Link>
            </li>
            {Object.entries(navItems).map(([category, subItems]) => (
              <li key={category}>
                <p className="font-semibold text-blue-300">{category}</p>
                <ul className="ml-4 mt-1 space-y-1">
                  {subItems.map((subItem) => (
                    <li
                      key={subItem}
                      onClick={() => {
                        onSubMenuClick(subItem);
                        setMobileMenuOpen(false);
                      }}
                      className="text-gray-200 hover:text-white cursor-pointer"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="block text-white">
                <FaShoppingCart className="inline mr-2" /> Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
