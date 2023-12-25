import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Article from './Pages/Article/Article';
import Account from './Pages/Account/Account';
import Wishlist from './Components/Account/WishList/WishList';
import UserData from './Components/Account/UserData/UserData';
import Support from './Components/Account/Support/Support';
import Orders from './Components/Account/Order/Orders';
import Shop from './Pages/Shop/Shop';
import Cart from './Components/Cart/CartLayout/CartLayout';
import Product from './Pages/Product/Product';
import CheckoutLayout from './Components/Checkout/CheckoutLayout';
import Root from './Pages/Root/Root';
import Admin from '@Pages/Admin/Admin';

const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shopping-cart',
        element: <Cart />,
      },
      {
        path: 'product/:productId/*',
        element: <Product />,
      },
      {
        path: 'checkout',
        element: <CheckoutLayout />,
      },
      {
        path: 'blog/*',
        element: <Article />,
      },
      {
        path: 'account/*',
        element: <Account />,
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
            path: 'wish-list',
            element: <Wishlist />,
          },
          {
            path: 'support',
            element: <Support />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// добавити іконку хрестика при написанні в полі пошуку та при її натисканні очищувати поле та автоматично фокусуватись

// сховування фільтрів

// пошук товарів

// правильні запити

// додавання коментарів

// створення замовлення

// додавання до колекції юзера

// авторизація

// механіка додавання товару відразу до замовлення а не до кошику

// пагінація

// оптимізація

// запит товарів у кошику та wish list

// зробити міні фреймворк по інпутам, також потрібно переробити просту форму так щоб підходив простий інпут

// зробити так, щоб коли я використовую пошук щоб відбувся запит до бази даних після яккогось таймеру, але тільки якщо це можливо і якщо це можливо то треба переміниит іконку пошуку і добавити її в інпут

// далі мені треба щоб алерти переробити під debounce

// поправити кольори та transotion

// при зміні адресної стрічки провести маніпуляції з фільтрами та сортуванням

// общий текст для обрізання в блоках
