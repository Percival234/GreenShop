import axios from 'axios';

import { SERVER_URL } from '@Constants/CONSTANTS';

export const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function fetchProducts() {
  const params = new URLSearchParams(window.location.search);

  const query = {};

  for (const [key, value] of params) {
    query[key] = value;
  }

  const queryString = new URLSearchParams(query).toString();

  const response = await axiosInstance.get(`product?${queryString}`);
  return response.data;
}
export async function fetchRelated(categoryId, productId) {
  const response = await axiosInstance.get(
    `product?categories=${[categoryId]}&exclude=${productId}&limit=12`
  );
  return response.data;
}

//!============================

export async function fetchUser() {
  const response = await axiosInstance.get(`user/current`);
  return response.data;
}
export async function updateImage(file) {
  const response = await axiosInstance.post(`user/upload`, file, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
export async function loginUser(userData) {
  const response = await axiosInstance.post(`user/login`, userData);
  return response.data;
}
export async function registerUser(userData) {
  const response = await axiosInstance.post(`user/register`, userData);
  return response.data;
}
export async function updateUser(userData) {
  const response = await axiosInstance.patch('user', userData);
  return response.data;
}
export async function deleteUser() {
  const response = await axiosInstance.delete('user');
  return response.data;
}
export async function fetchCategories() {
  const response = await axiosInstance.get('category');
  return response.data;
}
export async function fetchSizes() {
  const response = await axiosInstance.get('size');
  return response.data;
}
export async function fetchWishlist() {
  const response = await axiosInstance.get('wishlist');
  return response.data;
}
export async function clearWishlist() {
  const response = await axiosInstance.delete('wishlist');
  return response.data;
}
export async function updateWishlist(productId) {
  const response = await axiosInstance.patch(`wishlist`, { productId });
  return response.data;
}
export async function fetchDetails(productId) {
  const response = await axiosInstance.get(`detail/${productId}`);
  return response.data;
}
export async function fetchReviews(productId) {
  const response = await axiosInstance.get(`review/${productId}`);
  return response.data;
}
export async function fetchOrders() {
  const response = await axiosInstance.get(`order`);
  return response.data;
}
export async function fetchProduct(productId) {
  const response = await axiosInstance.get(`product/${productId}`);
  return response.data;
}
export async function fetchBlog(id) {
  const response = await axiosInstance.get(`blog/${id}`);
  return response.data;
}
export async function fetchBlogs() {
  const response = await axiosInstance.get(`blog`);
  return response.data;
}
export async function postReview(review) {
  const response = await axiosInstance.post(`review`, review);
  return response.data;
}
export async function postOrder(order) {
  const response = await axiosInstance.post(`order`, order);
  return response.data;
}
export async function deleteReview() {
  const response = await axiosInstance.delete(`review`);
  return response.data;
}
export async function postReport(report) {
  const response = await axiosInstance.post('report', report, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
