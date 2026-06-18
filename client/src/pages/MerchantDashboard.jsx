import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

const MerchantDashboard = () => {
  const { products, deleteProduct } = useProducts();
  const { logout, user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="max-w-7xl mx-auto px-6 pb-4 flex justify-between items-center">
        <p className="text-gray-600">
          Welcome, {user?.name}
        </p>

        <h1 className="text-2xl font-bold text-blue-600">
          Zenvora E-Shop
        </h1>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Merchant Dashboard
        </h1>

        <div className="bg-white p-2 rounded-lg shadow mb-3">
          <h2 className="text-xl font-semibold">
            Total Products: {products.length}
          </h2>
        </div>

        <Link
          to="/merchant/add-product"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Add Product
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">
                {product.title}
              </h2>

              <p>₹{product.price}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  navigate(`/edit-product/${product._id}`)
                }
                className="bg-yellow-500 text-white px-3 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white px-3 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantDashboard;