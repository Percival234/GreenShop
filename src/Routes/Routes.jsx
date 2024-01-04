import { createBrowserRouter } from 'react-router-dom';

import Root from '@Root/Root';
import CartPage from '@Pages/CartPage';
import HomePage from '@Pages/HomePage';
import BlogPage from '@Pages/BlogPage';
import AccountPage from '@Pages/AccountPage';
import ProductPage from '@Pages/ProductPage';
import CheckoutPage from '@Pages/CheckoutPage';
import NotFoundPage from '@Pages/NotFoundPage';
import Orders from '@Components/Order/Orders';
import Reviews from '@Components/Reviews/Reviews';
import Details from '@Components/Details/Details';
import Support from '@Components/Support/Support';
import Wishlist from '@Components/WishList/WishList';
import UserData from '@Components/UserData/UserData';

const authenticatedRoutes = [
  {
    path: 'account',
    element: <AccountPage />,
    children: [
      {
        path: '',
        element: <UserData />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'support',
        element: <Support />,
      },
    ],
  },
];

const publicRoutes = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
    children: [
      {
        path: '',
        element: <Details />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
    ],
  },
  {
    path: 'checkout',
    element: <CheckoutPage />,
  },
  {
    path: 'blog/:id',
    element: <BlogPage />,
  },
];

const allRoutes = [
  {
    path: '',
    element: <Root />,
    children: [...publicRoutes, ...authenticatedRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(allRoutes);
