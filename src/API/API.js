import axios from 'axios';

import { SERVER_URL } from '@Constants/CONSTANTS';

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export async function fetchProduct() {
  const response = await axiosInstance.get(`product`);
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
  await axiosInstance.delete(`wishlist`);
}

export async function updateWishlist(productId) {
  const response = await axiosInstance.patch(`wishlist`, { productId: productId });
  console.log('ddd');
  return response.data;
}
