export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto ">

        {/* Contact Info */}
        <div>
          <p className="space-y-2 text-gray-300 text-sm">
            <b>Contact Us</b>
          
            📍 Near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand 263139 📞 +91 89589 82616 ✉️ contact@sangelatrading@com
          </p>
        </div>

       </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sangela Trading Company. All rights reserved.
      </div>
    </footer>
  );
}
