import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

const Home = () => {

  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Latest Products
        </h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default Home;