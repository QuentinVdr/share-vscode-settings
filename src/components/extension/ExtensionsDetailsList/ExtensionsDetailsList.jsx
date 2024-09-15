import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';

export default function ExtensionsDetailsList() {
  const { showError } = useSnackbarStore();
  const { extensionsIds } = useExtensionStore();
  const extensionsQueries = useExtensionByIdsQueries(extensionsIds, {
    onError: () => {
      showError({ message: 'Failed to fetch extension details' });
    }
  });

  return (
    <Stack direction="column" gap={4}>
      <Typography variant="h1">Extension details</Typography>
      <Grid container spacing={2}>
        {extensionsQueries.map((query, index) => (
          <Grid key={extensionsIds[index]} size={{ xs: 12, md: 6, xl: 4 }}>
            <ExtensionDetailCard extensionId={extensionsIds[index]} extensionQuery={query} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
