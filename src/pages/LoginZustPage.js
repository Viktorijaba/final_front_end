import React, { useState } from 'react';
import useStore from '../store/main';
import { useNavigate } from 'react-router-dom';

const LoginZustPage = () => {
    const loginUser = useStore((state) => state.loginUser);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const result = loginUser(username, password);
        if (result && result.success) {
            navigate('/profile');
        } else if (result && result.error) {
            setError(result.error);
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default LoginZustPage;
