import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleGetOTP = () => {
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(phone)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }

        navigate('/GetOTP');
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-xl space-y-6">
            <h2 className="text-center text-lg font-semibold text-gray-200">OTP Verification</h2>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="button"
                onClick={handleGetOTP}
                className="w-full px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Get OTP
            </button>
        </div>
    );
};

export default Input;
