import { useCart } from "../context/CartContext";

const ProductGallery = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">
      {products.map((product) => {
        const mrp = parseFloat(product.mrp);
        const price = parseFloat(product.price);
        const discount = mrp && price ? Math.round(((mrp - price) * 100) / mrp) : 0;

        return (
          <div key={product.item_id} className="border rounded-lg p-4 shadow-sm relative bg-white">
            {/* Product Image */}
            <img
              src={`/images/${product.image_path}/${product.image}`}
              alt={product.item_name}
              className="w-full h-48 object-contain mb-4"
            />

            {/* Product Title */}
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {product.brand_name} - {product.capacity} {product.item_name}
            </h3>

            {/* Pricing */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-red-600 font-bold text-lg">Offer ₹{price}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">MRP</span>
              <span className="text-sm text-gray-500 line-through">₹{mrp}</span>
            </div>

            {/* Discount Bubble */}
            {discount > 0 && (
              <div className="absolute top-2 right-2 w-16 h-16 rounded-full border-2 border-red flex justify-center items-center bg-red-600 text-white font-bold flex text-sm animate-pulse shadow-md">
                {discount}% OFF
              </div>
            )}

            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/918958982616?text=Hello,%20I%20am%20interested%20in%20${encodeURIComponent(
                product.brand_name + " " + product.item_name + " (" + product.capacity + ") - ₹" + price
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 inline-block hover:underline font-bold"
            >
              Contact Dealer
            </a>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGallery;
