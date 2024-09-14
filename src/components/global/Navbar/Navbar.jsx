import { AppBar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <AppBar className={styles.navbar} position="sticky">
      <Stack direction="row" gap={2} alignItems="center">
        <Link to="/" className={styles.logo}>
          <Typography variant="h1">Vscode extension Shared</Typography>
        </Link>
      </Stack>
    </AppBar>
  );
}
