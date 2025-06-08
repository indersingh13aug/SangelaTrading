import { FaSearch } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Papa from "papaparse";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import ProductGallery from "./components/ProductGallery";
import { Link } from "react-router-dom";
import ContactPage from "./pages/ContactPage"; // <-- add at the top

const subMenuToTypeMap = {
  "Refrigerators": "Home Appliances",
  "Washing Machines": "Home Appliances",
  "Air Conditioners": "Cooling Appliance",
  "LED TVs": "Television",
  "OLED TVs": "Television",
  "Speakers": "Audio"
};

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/products.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setAllProducts(results.data);
            setFiltered(results.data);
          },
        });
      });
  }, []);

  const handleSubMenuClick = (subItem) => {
    const mappedType = subMenuToTypeMap[subItem];
    const keyword = subItem.split(" ")[0].toLowerCase(); // 'led' or 'oled'

    const filteredItems = allProducts.filter(item => {
      const matchesType = item.type === mappedType;
      const matchesKeyword = item.item_name.toLowerCase().includes(keyword);
      // If type is unique (like "Audio", "Television"), match only by type
      if (["Audio", "Cooling Appliance"].includes(mappedType)) {
        return matchesType;
      }
      return matchesType && matchesKeyword;
    });

    setFiltered(filteredItems);
  };



  const handleSearch = (query) => {
    setSearchQuery(query);
    const searchResults = allProducts.filter(item =>
      item.item_name.toLowerCase().includes(query.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(searchResults);
  };

  return (
    <Router>
      <div className="min-h-screen font-sans bg-white flex flex-col">
        <div className="bg-red-600 px-4 py-3 flex flex-wrap items-center justify-between text-white">
          <div className="text-xl font-bold tracking-wide">
            <Link to="/" className="hover:text-blue-400">SANGELA TRADING COMPANY</Link>
          </div>

          <div className="flex-grow max-w-md mx-4 relative">
            <input
              type="text"
              placeholder="Search Products"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded text-black"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <NavBar onSubMenuClick={handleSubMenuClick} />

       

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ProductGallery products={filtered} />} />
            <Route path="/contact" element={<ContactPage />} /> {/* <-- new route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
