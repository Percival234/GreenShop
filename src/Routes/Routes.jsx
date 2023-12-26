import { createBrowserRouter } from 'react-router-dom';

import Root from '@Root/Root';
import CartPage from '@Pages/CartPage';
import HomePage from '@Pages/HomePage';
import ShopPage from '@Pages/ShopPage';
import BlogPage from '@Pages/BlogPage';
import AdminPage from '@Pages/AdminPage';
import AccountPage from '@Pages/AccountPage';
import ProductPage from '@Pages/ProductPage';
import CheckoutPage from '@Pages/CheckoutPage';
import NotFoundPage from '@Pages/NotFoundPage';
import Orders from '@Components/Account/Order/Orders';
import Support from '@Components/Account/Support/Support';
import Wishlist from '@Components/Account/WishList/WishList';
import UserData from '@Components/Account/UserData/UserData';

const isAdmin = true;
const isAuthenticated = true;

const adminRoutes = isAdmin
  ? [
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ]
  : [];

const authenticatedRoutes = isAuthenticated
  ? [
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
    ]
  : [];

const publicRoutes = [
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: 'shop',
    element: <ShopPage />,
  },
  {
    path: 'shopping-cart',
    element: <CartPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
  },
  {
    path: 'checkout',
    element: <CheckoutPage />,
  },
  {
    path: 'blog',
    element: <BlogPage />,
  },
];

const allRoutes = [
  {
    path: '',
    element: <Root />,
    children: [...publicRoutes, ...adminRoutes, ...authenticatedRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const router = createBrowserRouter(allRoutes);
