import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Get the redirect path from location state, or default to home
    const from = location.state?.from || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const credentials = { email, password };
            await login(credentials);
            
            setSuccessMessage('Login successful!');
            setErrorMessage('');

            // Redirect to the original requested page after successful login
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 1000);

        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Login failed.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="login-container">
            <Link to="/">
                <img src='backbutton1.svg' alt="Back" className="back-button" />
            </Link>

            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login to SORTIFY</h2>
                
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-button">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;