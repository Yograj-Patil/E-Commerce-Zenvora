import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <>
            <Navbar />

            <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">
                    My Cart
                </h1>

                {cartItems.length === 0 ? (
                    <p>Cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border p-4 rounded-lg mb-4"
                        >
                            <div>
                                <h2>{item.title}</h2>
                                <p>₹{item.price}</p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">
                    Total: ₹{totalPrice}
                </h2>

                <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">
                    Checkout
                </button>
            </div>

        </>
    );
};

export default Cart;