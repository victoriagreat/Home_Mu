// src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Optional: Add a trailing slash if needed
export const API_URL = API_BASE_URL.endsWith('/') 
  ? API_BASE_URL 
  : `${API_BASE_URL}/`;

console.log('Using API base URL:', API_URL); // Helpful for debugging

export default API_URL;