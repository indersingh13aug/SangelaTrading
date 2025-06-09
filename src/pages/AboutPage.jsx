import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12"
      >
        {/* Owner Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8 mb-8">
          <img
            src="/images/owner.jpg"
            alt="Mr. Surendra Singh Sangela"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow-md"
          />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800">
              Mr. Surendra Singh Sangela
            </h2>
            <p className="text-sm text-gray-500">
              Founder & Proprietor, Sangela Trading Company
            </p>
            
          </div>
        </div>

        {/* About Content */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Sangela Trading Company
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <strong>Sangela Trading Company</strong> was founded in <strong>2005</strong> by <strong>Mr. K. S. Sangela</strong>, and has proudly served the Haldwani region for over <strong>20 years</strong>. As a trusted name in electronics and electrical appliances, we offer a wide selection of products that combine quality, variety, and service excellence.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our showroom features an extensive range of electronic equipment including <strong>LED TVs, Refrigerators, Air Conditioners, CCTV Systems, Speakers</strong>, and more. We stock top brands such as <strong>LG, Samsung, Sony, Panasonic, Godrej, CP Plus, Voltas</strong>, ensuring every customer finds exactly what they need.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Located <strong>near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand – 263139</strong>, our store is open <strong>every day from 10:00 AM to 9:00 PM</strong>. Our team also provides professional <strong>installation services</strong> for all equipment purchased, offering you a seamless experience from selection to setup.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We believe in building long-term relationships based on trust and satisfaction. For inquiries or support, reach out to us at <strong className="text-blue-600">+91-8958982616</strong>.
        </p>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-800">
            Sangela Trading Company
          </p>
          <p className="text-sm text-gray-500">
            “Where Technology Meets Trust”
          </p>
        </div>
      </motion.div>
    </div>
  );
}
