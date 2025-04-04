import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedOtp = sessionStorage.getItem('otp'); // Retrieve OTP

        if (otp.trim() === storedOtp) {
            alert("✅ OTP Verified Successfully!");
            navigate('/'); // Redirect after success (optional)
        } else {
            setError('❌ Incorrect OTP. Please try again.');
        }
    };

    const handlePasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (/^\d{6}$/.test(text.trim())) {
                setOtp(text.trim());
                setError('');
            } else {
                setError('Invalid OTP format.');
            }
        } catch {
            setError('Failed to read from clipboard.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-xl space-y-6">
            <h2 className="text-center text-lg font-semibold text-gray-200">Verify OTP</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    maxLength="6"
                    className="w-full px-4 py-2 bg-gray-800 text-orange-400 text-center text-lg border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="button"
                    onClick={handlePasteFromClipboard}
                    className="w-full px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Paste OTP from Clipboard
                </button>

                <button
                    type="submit"
                    className="w-full px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Verify OTP
                </button>
            </form>

            {error && <p className="text-red-500 text-center font-medium">{error}</p>}
        </div>
    );
};

export default VerifyOTP;
