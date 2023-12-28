import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { router } from '@Routes/Routes';

import { SERVER_URL } from './CONSTANTS/CONSTANTS';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      queryFn: async ({ queryKey, method, body }) => {
        const [endpoint] = queryKey;
        const token = localStorage.getItem('token');
        const options = {
          method: method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          body: body ? JSON.stringify(body) : undefined,
        };
        const response = await fetch(`${SERVER_URL}/api/${endpoint}`, options);
        return response.json();
      },
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
