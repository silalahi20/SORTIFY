// // src/api.js
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/users/';

// export const registerUser = (userData) => {
//     return axios.post(`${API_BASE_URL}register`, userData);
// };

// export const loginUser = (credentials) => {
//     return axios.post(`${API_BASE_URL}login`, credentials);
// };
// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users/';

export const registerUser = (userData) => {
    return axios.post(`${API_BASE_URL}register`, userData);
};

export const loginUser = (credentials) => {
    return axios.post(`${API_BASE_URL}login`, credentials);
};
  
// Fungsi baru untuk mengambil data profil pengguna
export const fetchUserProfile = (token) => {
    return axios.get(`${API_BASE_URL}profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const uploadProfileImage = async (formData, token) => {
    try {
        const response = await fetch('http://localhost:5000/api/users/upload-profile-pic', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // Menambahkan token untuk autentikasi
            },
            body: formData, // Mengirim FormData yang berisi gambar
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        return data; // Mengembalikan data gambar dari respons backend (misalnya URL gambar)
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        throw error; // Lempar error untuk ditangani di komponen
    }
};
