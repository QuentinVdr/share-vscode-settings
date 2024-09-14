import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Box className={styles.container}>
      <Stack alignItems="center" gap={2}>
        <Typography variant="h1">Page not found</Typography>
        <Typography variant="h6">The page you are looking for could doesn&apos;t exist or has been removed</Typography>
        <Button variant="contained" endIcon={<ArrowForward />} onClick={() => navigate('/')}>
          Go back to a safe place
        </Button>
      </Stack>
    </Box>
  );
}
