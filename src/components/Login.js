import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pastikan untuk menggunakan react-router-dom untuk navigasi
import '../styles/Login.css'; // Import CSS untuk halaman Login
 // Import gambar back button

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle logic untuk login disini
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="login-container">
            <Link to="/">
                <img src='backbutton1.svg' alt="Back" className="back-button" />
            </Link>
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login to SORTIFY</h2>
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
