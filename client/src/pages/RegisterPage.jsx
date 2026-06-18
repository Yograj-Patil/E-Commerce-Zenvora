import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            alert("Please fill all fields");
            return;
        }

        try {
            await API.post("/auth/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            });

            alert("Registration Successful");
            navigate("/login");
        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message || error.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Create Account
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Join our marketplace today
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border rounded-lg px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Select Role
                        </label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3">
                            <option value="customer">Customer</option>
                            <option value="merchant">Merchant</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;