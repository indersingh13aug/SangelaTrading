import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  // Helper to build WhatsApp URL with message
  const buildWhatsAppLink = (products) => {
    const baseUrl = "https://wa.me/918958982616?text=";
    // Compose message lines for each product
    const messageLines = products.map((item, idx) => {
      return `${idx + 1}. ${item.brand_name} ${item.item_name} (${item.capacity}) - Type: ${item.type} - Qty: ${item.quantity} - Price: ₹${item.price * item.quantity}`;
    });
    const message = encodeURIComponent(
      `Hello, I am interested in the following products:\n` + messageLines.join("\n")
    );
    return baseUrl + message;
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.item_id}
            className="flex flex-col sm:flex-row items-center border rounded-lg p-4 shadow-md bg-white"
          >
            {/* Image */}
            <img
              src={`/images/${item.image_path}/${item.image}`}
              alt={item.item_name}
              className="w-32 h-24 object-contain mr-4 mb-4 sm:mb-0"
            />

            {/* Details */}
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">
                {item.brand_name} - {item.item_name}
              </h3>
              <p className="text-gray-600">Type: {item.type}</p>
              <p className="text-gray-600">Capacity: {item.capacity}</p>
              <p className="text-lg font-bold mt-1">Price: ₹{item.price}</p>
            </div>

            {/* Quantity */}
            <div className="flex flex-col items-center justify-center mr-4">
              <label
                htmlFor={`qty-${item.item_id}`}
                className="mb-1 font-semibold text-gray-700"
              >
                Quantity
              </label>
              <input
                id={`qty-${item.item_id}`}
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.item_id, parseInt(e.target.value) || 1)
                }
                className="w-16 text-center border rounded px-2 py-1"
              />
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.item_id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mb-2 sm:mb-0"
              aria-label={`Remove ${item.brand_name} ${item.item_name} from cart`}
            >
              Remove
            </button>

            
          </div>
        ))}
      </div>

      {/* Total and Clear + Contact Dealer for all */}
      <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <h3 className="text-2xl font-bold">
          Total: ₹{getTotalPrice().toFixed(2)}
        </h3>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded"
          >
            Clear Cart
          </button>
          <a
            href={buildWhatsAppLink(cartItems)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            aria-label="Contact dealer about all products"
          >
            Contact Dealer (All)
          </a>
        </div>
      </div>
    </div>
  );
}
