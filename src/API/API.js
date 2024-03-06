import axios from 'axios';

import { SERVER_URL } from '@Constants/SERVER_URL';

export const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// --- REQUEST --- //

const request = async (method, endpoint, data = null, config = {}) => {
  try {
    const response = await axiosInstance[method](endpoint, data, config);
    return response.data;
  } catch (error) {
    console.error(`Error in ${method} ${endpoint}:`, error);
    throw error;
  }
};

// --- USER --- //

export const deleteUser = () => request('delete', 'user');
export const fetchUser = () => request('get', 'user/current');
export const updateUser = (userData) => request('patch', 'user', userData);
export const loginUser = (userData) => request('post', 'user/login', userData);
export const registerUser = (userData) => request('post', 'user/register', userData);

// --- FILTER --- //

export const fetchSizes = () => request('get', 'size');
export const fetchCategories = () => request('get', 'category');

// --- WISHLIST --- //

export const fetchWishlist = () => request('get', 'wishlist');
export const clearWishlist = () => request('delete', 'wishlist');
export const updateWishlist = (productId) => request('patch', 'wishlist', { productId });

// --- PRODUCT --- //

export const fetchProduct = (productId) => request('get', `product/${productId}`);
export const fetchRelated = (categoryId, productId) =>
  request('get', `product?categories=${categoryId}&exclude=${productId}&limit=12`);
export const fetchProducts = () =>
  request('get', `product?${new URLSearchParams(window.location.search).toString()}`);

// --- DETAILS --- //

export const fetchDetails = (productId) => request('get', `detail/${productId}`);

// --- WISHLIST --- //

export const postReview = (review) => request('post', 'review', review);
export const fetchReviews = (productId) => request('get', `review/${productId}`);

// --- ORDER --- //

export const fetchOrders = () => request('get', 'order');
export const postOrder = (order) => request('post', 'order', order);

// --- BLOG --- //

export const fetchBlogs = () => request('get', 'blog');
export const fetchBlog = (id) => request('get', `blog/${id}`);

// --- REPORT --- //

export const postReport = (report) => request('post', 'report', report);
