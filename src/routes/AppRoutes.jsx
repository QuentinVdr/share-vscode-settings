import ExtensionsDetail from '@pages/ExtensionsDetail/ExtensionsDetail';
import Home from '@pages/Home/Home';
import { NotFound } from '@pages/NotFound/NotFound';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout';

/**
 * Componant to handle all the routes of the application
 */
export const AppRouter = () => (
  <RouterProvider
    router={createBrowserRouter(
      createRoutesFromElements(
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/extensions-detail" element={<ExtensionsDetail />} />
          <Route path="/not-found" element={<NotFound />} />
          {/** Unknown path redirection */}
          <Route path="*" element={<NotFound />} />
        </Route>
      )
    )}
  />
);
