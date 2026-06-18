import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {product.title}
        </h2>

        <p className="text-gray-600 mt-2">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;