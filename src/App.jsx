import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { router } from '@Routes/Routes';

import { SERVER_URL } from './CONSTANTS/CONSTANTS';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
// const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
