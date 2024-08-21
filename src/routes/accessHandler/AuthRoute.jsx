import { useAuth } from '@hooks/contexts/useAuth';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

/**
 * Component used to check if the user is authenticated
 * @returns children routes if authenticated else redirect to the login page
 */
export default function AuthRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (!isAuthenticated()) {
      timeoutId = setTimeout(() => {
        navigate('/auth');
      }, 100);
    }
    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAuthenticated()]);

  return <Outlet />;
}
