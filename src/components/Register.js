import React, { useState } from 'react';
import '../styles/Register.css'; // Pastikan file CSS ini ada di folder styles
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // State untuk menangani input dan error
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e, setter) => {
        setter(e.target.value);
        setErrorMessage('');
    };

    // Fungsi untuk validasi password
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    // Fungsi untuk menangani form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long and contain uppercase, lowercase letters and numbers.');
            return;
        }

        // Simulasi proses registrasi berhasil
        setSuccessMessage('Account created successfully!');
        setTimeout(() => {
            navigate('/login'); // Redirect ke login setelah berhasil registrasi
        }, 2000); // Redirect setelah 2 detik
    };

    return (
        <div className="register-page">
            <h1>Create Your Account</h1>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => handleInputChange(e, setName)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange(e, setPassword)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => handleInputChange(e, setConfirmPassword)}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Register</button>
            </form>

            <div className="redirect">
                <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
        </div>
    );
};

export default Register;
