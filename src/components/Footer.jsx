
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="mx-auto ">

        {/* Contact Info */}
        <div>
          <p className="space-y-2 text-gray-300 text-sm">
            
        <a
  href="https://www.google.com/maps/place/Sangela+Trading+Company/@29.2263477,79.4987723,17z"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800"
>
  📍  Near Naini Vidya Peeth School, Unchapul, Cheenpur, Haldwani, Uttarakhand 263139 
</a>
            <br></br>
📞<a
  href="tel:+918958982616"
  className="text-blue-600 hover:text-blue-800"
>
+91-9839487372   
</a><br></br>
✉️ <a
  href="mailto:sangelatradingcompany@gmail.com"
  className="text-blue-600 hover:text-blue-800"
>
sangelatradingcompany@gmail.com
</a>


          </p>
        </div>

       </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sangela Trading Company. All rights reserved.
      </div>
    </footer>
  );
}
