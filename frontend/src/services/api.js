import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (data) => api.post('signup/', data);
export const login = (data) => api.post('login/', data);
export const getBooks = () => api.get('books/');
export const createBook = (data) => api.post('books/create/', data);
export const updateBook = (id, data) => api.put(`books/update/${id}/`, data);
export const deleteBook = (id) => api.delete(`books/delete/${id}/`);