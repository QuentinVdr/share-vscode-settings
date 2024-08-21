import { useAuth } from '@hooks/contexts/useAuth';
import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { showInfo } = useSnackbarStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    showInfo('Vous avez été déconnecté avec succès');
    handleCloseMenu();
    navigate('/');
  };

  const handleLogin = () => {
    handleCloseMenu();
    navigate('/auth');
  };

  return (
    <AppBar className={styles.navbar} position="sticky">
      <Stack direction="row" gap={2} alignItems="center">
        <Link to="/" className={styles.logo}>
          <Typography variant="h1">Todo-app</Typography>
        </Link>
        <div className={styles.userMenu}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorEl} open={isMenuOpen} onClose={handleCloseMenu}>
            {isAuthenticated() ? (
              <MenuItem onClick={handleLogout}>se déconnecter</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>se connecter</MenuItem>
            )}
          </Menu>
        </div>
      </Stack>
    </AppBar>
  );
}
