import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Papa from "papaparse";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductGallery from "./components/ProductGallery";
import ContactPage from "./pages/ContactPage";
import ImageCarousel from "./components/ImageCarousel";
import AboutPage from "./pages/AboutPage";


const subMenuToTypeMap = {
  "Refrigerators": "Home Appliances",
  "Washing Machines": "Home Appliances",
  "Air Conditioners": "Cooling Appliance",
  "LED TVs": "Television",
  "OLED TVs": "Television",
  "Speakers": "Audio",
  "CCTV": "Security",
  "RO":"Water Purifier",
};

function MainApp() {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/products.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const cleanedData = results.data.map(item => ({
              ...item,
              image_path: item.image_path?.trim() || "",
              image: item.image?.trim() || ""
            }));
            setAllProducts(cleanedData);
            setFiltered(cleanedData);
          }
        });
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filtered]);

  const handleSubMenuClick = (subItem) => {
    const mappedType = subMenuToTypeMap[subItem];
    const keyword = subItem.split(" ")[0].toLowerCase();

    const filteredItems = allProducts.filter(item => {
      const matchesType = item.type === mappedType;
      const matchesKeyword = item.item_name.toLowerCase().includes(keyword);
      if (["Audio", "Cooling Appliance"].includes(mappedType)) {
        return matchesType;
      }
      return matchesType && matchesKeyword;
    });

    setFiltered(filteredItems);
    navigate("/");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = allProducts.filter(item =>
      item.item_name.toLowerCase().includes(query.toLowerCase()) ||
      item.brand_name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen font-sans bg-white flex flex-col">
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="bg-red-600 px-4 py-1 flex flex-wrap items-center justify-between text-white">
          <div className="text-xl font-bold tracking-wide">
            <Link to="/" onClick={() => setFiltered(allProducts)} className="hover:text-blue-400">
              SANGELA TRADING COMPANY
            </Link>
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
      </div>


      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <ImageCarousel />
              <ProductGallery products={currentItems} />
              <div className="flex justify-center mt-4 gap-2 flex-wrap">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-2 py-1 text-xl text-gray-700 disabled:opacity-30"
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-8 h-8 text-sm flex items-center justify-center rounded-full 
              ${currentPage === i + 1 ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 text-xl text-gray-700 disabled:opacity-30"
                >
                  ›
                </button>
              </div>
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
