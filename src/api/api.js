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
