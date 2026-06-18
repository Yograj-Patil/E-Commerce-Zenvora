import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartItems } = useCart();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">
                    Zenvora E-Shop
                </h1> 

                <div className="flex items-center gap-6">
                    <Link to="/">Home</Link>

                    <Link to="/cart">Cart ({cartItems.length})</Link>

                    <span className="font-medium">
                        {user?.name}

                    </span>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;