import axios from 'axios';

import { SERVER_URL } from '@Constants/CONSTANTS';

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export async function fetchProducts() {
  const params = new URLSearchParams(window.location.search);

  const query = {};

  for (const [key, value] of params) {
    query[key] = value;
  }

  const queryString = new URLSearchParams(query).toString();

  // Вивести отриманий URL-рядок запиту
  console.log(queryString);

  const response = await axiosInstance.get(`product?${queryString}`);
  // console.log(response.data);
  return response.data;
}
export async function fetchRelated(categoryId, productId) {
  const response = await axiosInstance.get(
    `product?categories=${[categoryId]}&exclude=${productId}&limit=12`
  );
  return response.data;
}
export async function fetchUser() {
  const response = await axiosInstance.get(`user/current`);
  return response.data;
}
export async function fetchCategories() {
  const response = await axiosInstance.get(`category`);
  return response.data;
}
export async function fetchSizes() {
  const response = await axiosInstance.get(`size`);
  return response.data;
}
export async function fetchWishlist() {
  const response = await axiosInstance.get(`wishlist`);
  return response.data;
}
export async function clearWishlist() {
  const response = await axiosInstance.delete(`wishlist`);
  return response.data;
}
export async function updateWishlist(productId) {
  const response = await axiosInstance.patch(`wishlist`, { productId: productId });
  return response.data;
}
export async function fetchDetails(productId) {
  const response = await axiosInstance.get(`details/${productId}`);
  return response.data;
}
export async function fetchReviews(productId) {
  const response = await axiosInstance.get(`reviews/${productId}`);
  return response.data;
}
export async function fetchProduct(productId) {
  const response = await axiosInstance.get(`product/${productId}`);
  return response.data;
}
