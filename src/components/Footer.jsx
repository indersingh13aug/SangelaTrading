import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 Near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand 263139</li>
            <li>📞 +91 89589 82616</li>
            <li>✉️ contact@sangelatrading@com</li>
          </ul>
        </div>

       </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sangela Trading Company. All rights reserved.
      </div>
    </footer>
  );
}
