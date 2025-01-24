import React, { useState } from 'react';
import useStore from '../store/main';
import { useNavigate } from 'react-router-dom';

const RegisterZustPage = () => {
    const registerUser = useStore((state) => state.registerUser);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const result = registerUser(username, password, confirmPassword);
        if (result && result.error) {
            setError(result.error);
        } else if (result && result.success) {
            setError('');
            navigate('/login');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default RegisterZustPage;
