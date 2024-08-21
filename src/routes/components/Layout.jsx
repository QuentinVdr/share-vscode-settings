import Navbar from '@components/global/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

/**
 * Helper component that allows the page to display the Header and the Routes in the App component
 * @returns The header and the route where the user is.
 */
function Layout() {
  return (
    <>
      <Navbar />
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
