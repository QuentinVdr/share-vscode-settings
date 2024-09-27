import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import handleErrors from '@utils/errors/handleErrors';
import PropTypes from 'prop-types';

// Create a react query client to interact with a cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 1000, // 1 hour
      gcTime: 60 * 60 * 1000 // 1 hour
    },
    mutations: {
      retry: 0
    }
  },
  mutationCache: new MutationCache({
    onError: (error) => handleErrors(error)
  }),
  queryCache: new QueryCache({
    onError: (error) => handleErrors(error)
  })
});

/** Component used to handle the react query configuration and tools */
export const ReactQueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools buttonPosition="bottom-right" position="bottom" />
    {children}
  </QueryClientProvider>
);

/** Define component props */
ReactQueryProvider.propTypes = {
  children: PropTypes.element.isRequired
};
