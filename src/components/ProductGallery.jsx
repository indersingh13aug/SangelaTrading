const ProductGallery = ({ products }) => {
  const generateWhatsAppLink = (product) => {
  const message = `Hello, I am interested in the following product:

Brand: ${product.brand_name}
Capacity: ${product.capacity}
Item: ${product.item_name}
Price: ₹${product.price}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/918958982616?text=${encodedMessage}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.item_id} className="border rounded p-4 shadow">
          <img
            src={`/images/${product.image_path}/${product.image}`}
            alt={product.item_name}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold">
            {product.brand_name} - {product.capacity}
          </h3>
          <p className="text-red-600 font-bold">₹{product.price}</p>
          <p className="text-sm text-gray-600 mb-2">{product.item_name}</p>

          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Contact to Dealer
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
