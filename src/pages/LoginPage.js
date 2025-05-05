import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleLogin = async (credentials) => {
        try {
            // Call the login API with the provided credentials
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Redirect to home page on successful login
            history.push('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;