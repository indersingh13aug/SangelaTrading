import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          We'd love to hear from you! Feel free to reach out using the contact details below.
        </p>

        <div className="space-y-4 text-lg text-gray-700">
          <div>
            <strong>Address:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Sangela+Trading+Company/@29.2263477,79.4987723,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand 263139
            </a>
          </div>

          <div>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+918958982616"
              className="text-blue-600 hover:underline"
            >
              +91-89589 82616
            </a>
          </div>

          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sangelatradingcompany@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sangelatradingcompany@gmail.com
            </a>
          </div>

          <div>
            <strong>Opening Hours:</strong>
            <p className="mt-1">
              Monday to Friday: 9:00 AM – 9:00 PM <br />
              Saturday & Sunday: 9:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 overflow-hidden rounded-lg border border-gray-300 shadow-md">
            <iframe
              title="Sangela Trading Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.905035021709!2d79.4987723!3d29.2263477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bb62bd39f03%3A0xd51c11263caac989!2sSangela%20Trading%20Company!5e0!3m2!1sen!2sin!4v1749386544870!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
