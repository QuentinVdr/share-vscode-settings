import { AlertSnackbar } from '@components/global/AlertSnackbar/AlertSnackbar';
import { ReactQueryProvider } from '@contexts/ReactQueryProvider';
import { ThemeProvider } from '@emotion/react';
import AuthProvider from '@hooks/contexts/useAuth';
import { CssBaseline } from '@mui/material';
import { AppRouter } from '@routes/AppRoutes';
import { theme } from '@styles/theme';
import PropTypes from 'prop-types';

/**
 * Component used to handle the application
 */
export function App() {
  return (
    <AppProviders>
      <AppRouter />
      <AlertSnackbar />
    </AppProviders>
  );
}

/**
 * Component used to handle all the needed providers in a single component
 */
const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReactQueryProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
};
