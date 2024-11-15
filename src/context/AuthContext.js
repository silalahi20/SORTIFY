// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [userData, setUserData] = useState({
//         image: 'path_to_default_image.jpg', 
//         name: 'Default Name', 
//         email: 'default@example.com'
//     });

//     useEffect(() => {
//         // Synchronize login state across tabs
//         const syncLoginState = () => {
//             const token = localStorage.getItem('token');
//             const storedUserData = localStorage.getItem('userData');
//             setIsLoggedIn(!!token);
//             if (storedUserData) {
//                 setUserData(JSON.parse(storedUserData));
//             }
//         };

//         // Add event listener for storage changes
//         window.addEventListener('storage', syncLoginState);

//         // Initial check for token and user data in local storage
//         syncLoginState();

//         // Cleanup event listener
//         return () => window.removeEventListener('storage', syncLoginState);
//     }, []);

//     const login = async (credentials) => {
//         try {
//           const response = await fetch('/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials)
//           });
//           const data = await response.json();
//           if (data.token) {
//             localStorage.setItem('token', data.token);
//             localStorage.setItem('userData', JSON.stringify(data.user)); // Simpan data pengguna
//             setIsLoggedIn(true);
//             setUserData(data.user); // Perbarui state userData
//           }
//         } catch (error) {
//           console.error('Login error:', error);
//         }
//       };

//     const logout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('userData');
//         setIsLoggedIn(false);
//         setUserData({ image: 'path_to_default_image.jpg', name: '', email: '' });
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function safeJSONParse(data) {
    try {
        return JSON.parse(data);
    } catch (e) {
        console.error("Failed to parse data as JSON:", data);
        return null;
    }
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        image: 'path_to_default_image.jpg', 
        name: 'Default Name', 
        email: 'default@example.com'
    });

    // Effect to check token and user data from localStorage on mount and on storage change
    useEffect(() => {
        const syncLoginState = () => {
            const token = localStorage.getItem('token');
            const storedUserData = localStorage.getItem('userData');
            setIsLoggedIn(!!token);
            if (storedUserData) {
                setUserData(safeJSONParse(storedUserData));
            }
        };

        syncLoginState(); // Check on mount

        window.addEventListener('storage', syncLoginState); // Listen for changes in other tabs

        return () => {
            window.removeEventListener('storage', syncLoginState);
        };
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error(`Login failed: ${response.status}`);
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userData', JSON.stringify(data.user));
                setIsLoggedIn(true);
                setUserData(data.user);
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Optionally re-throw to handle it elsewhere (e.g., show error message in UI)
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
        setUserData({
            image: 'path_to_default_image.jpg',
            name: 'Default Name',
            email: 'default@example.com'
        });
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
