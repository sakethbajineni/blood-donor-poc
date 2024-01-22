import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};
export default PasswordInput;