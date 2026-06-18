import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useState, useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, updateProduct } =
    useProducts();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const product = products.find(
      (p) => p._id === id
    );

    if (product) {
      setFormData(product);
    }
  }, [id, products]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(formData);

    navigate("/merchant");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;