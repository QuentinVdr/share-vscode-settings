import ExtensionsInput from '@components/extension/ExtensionsInput/ExtensionsInput';
import { Stack, Typography } from '@mui/material';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  return (
    <Stack direction="column" gap={3}>
      <Typography variant="h2">Welcome</Typography>
      <ExtensionsInput />
    </Stack>
  );
}
