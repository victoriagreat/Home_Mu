// src/config/api.js
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Fallback to localhost in case .env is missing or empty
const API_BASE_URL = baseUrl || 'http://localhost:5000';

// Ensure consistent trailing slash (prevents double or missing slashes)
export const API_URL = API_BASE_URL.endsWith('/') 
  ? API_BASE_URL 
  : `${API_BASE_URL}/`;

// Optional: Log in development only (hide in production)
if (import.meta.env.DEV) {
  console.log('Using API base URL:', API_URL);
}

export default API_URL;