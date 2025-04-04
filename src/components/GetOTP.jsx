import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function GetOTP() {
    const [otp, setOtp] = useState('');
    const otpRef = useRef(null);
    const navigate = useNavigate();

    const generateOTP = useCallback(() => {
        let generatedOtp = '';
        for (let i = 0; i < 6; i++) {
            generatedOtp += Math.floor(Math.random() * 10); // Generates random 6-digit OTP
        }
        setOtp(generatedOtp);
        sessionStorage.setItem('otp', generatedOtp); // Save in sessionStorage
    }, []);

    const copyOtpToClipboard = useCallback(() => {
        navigator.clipboard.writeText(otp);
        alert("OTP copied to clipboard!");
    }, [otp]);

    useEffect(() => {
        generateOTP();
    }, [generateOTP]);

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-xl space-y-6">
            <h2 className="text-center text-lg font-semibold text-gray-200">OTP Generator</h2>

            <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                <input
                    type="text"
                    value={otp}
                    readOnly
                    className="w-full bg-transparent text-orange-400 text-lg text-center outline-none"
                    ref={otpRef}
                />
                <button
                    onClick={copyOtpToClipboard}
                    className="bg-blue-600 px-4 py-1 rounded-lg text-white hover:bg-blue-700"
                >
                    Copy
                </button>
            </div>

            <button
                onClick={generateOTP}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
                Generate New OTP
            </button>

            <button
                onClick={() => navigate('/VerifyOTP')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-4"
            >
                Verify OTP
            </button>
        </div>
    );
}

export default GetOTP;
