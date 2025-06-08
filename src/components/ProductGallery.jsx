const ProductGallery = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.item_id} className="border rounded p-4 shadow">
          <img
            src={`/images/${product.image_path}/${product.image}`}
            alt={product.item_name}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold">{product.item_name}</h3>
          <p className="text-red-600 font-bold">₹{product.price}</p>
          <p className="text-sm text-gray-600">{product.brand_name} - {product.capacity}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
