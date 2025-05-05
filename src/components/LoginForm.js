import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.data.success) {
                // Redirect to home page or dashboard
                history.push('/home');
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    );
};

export default LoginForm;