export default function ContactPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-700">Contact Us</h1>

      <p className="mb-4">
        We'd love to hear from you! Reach out to us using the details below:
      </p>

      <ul className="text-gray-700 mb-6">
        <strong>Address:</strong> <a
          href="https://www.google.com/maps/place/Sangela+Trading+Company/@29.2263477,79.4987723,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black-600 hover:text-blue-800"
        >
          Near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand 263139
        </a>

        <li><strong>Phone:</strong><a
          href="tel:+918958982616"
          className="text-black-600 hover:text-blue-800"
        >
          +91-89589 82616
        </a></li>
        <li><strong>Email:</strong>  <a
          href="mailto:contact@sangelatrading@com"
          className="text-black-600 hover:text-blue-800"
        >
          contact@sangelatrading@com
        </a></li>

      </ul>
      <p className="mb-4">
        <b>Opening Hours</b>
        <br></br>
        Monday to Friday: 9am-9pm
        <br></br>
        Saturday to Sunday: 9am-11pm
      </p>



      <div className="w-full h-96 border-2 border-red-500">
        <iframe
          title="Sangela Trading"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.905035021709!2d79.4987723!3d29.2263477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bb62bd39f03%3A0xd51c11263caac989!2sSangela%20Trading%20Company!5e0!3m2!1sen!2sin!4v1749386544870!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}
