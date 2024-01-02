export const SERVER_URL = 'http://localhost:4500';

export const MIN_PRICE_VALUE = 0;
export const MAX_PRICE_VALUE = 1000;
export const PRICE_RANGE_STEP = 5;

export const SORT_ORDERS = ['default', 'rating', 'alphabet', 'ascending price', 'descending price'];

export const BANNERS = [
  `${SERVER_URL}/static/banners/banner-1.jpg`,
  `${SERVER_URL}/static/banners/banner-2.jpg`,
  `${SERVER_URL}/static/banners/banner-2.jpg`,
];

export const ADVERTISING = `${SERVER_URL}/static/banners/banner-sale.jpg`;

export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
