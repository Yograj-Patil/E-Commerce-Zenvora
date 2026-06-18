import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const addProduct = async (product) => {
        try {
            const response = await API.post(
                "/products",
                product
            );

            setProducts((prev) => [
                ...prev,
                response.data,
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await API.delete(`/products/${id}`);

            setProducts((prev) =>
                prev.filter((product) => product._id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const updateProduct = async (updatedProduct) => {
        try {
            const response = await API.put(
                `/products/${updatedProduct._id}`,
                updatedProduct
            );

            setProducts((prev) =>
                prev.map((product) =>
                    product._id === updatedProduct._id
                        ? response.data
                        : product
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await API.get("/products");

            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                fetchProducts,
                addProduct,
                deleteProduct,
                updateProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);