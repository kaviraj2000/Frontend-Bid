import axios from 'axios';

// The base URL of your backend
const APP_URL = process.env.REACT_APP_URL || 'http://localhost:5000';

// Function to get the token from local storage
function getToken() {
  return localStorage.getItem('token');
}

// Create an Axios instance
let Api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
});

// Set up an interceptor to add the Authorization token to each request
Api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
