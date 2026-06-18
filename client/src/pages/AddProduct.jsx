import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(formData);
    navigate("/merchant");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;