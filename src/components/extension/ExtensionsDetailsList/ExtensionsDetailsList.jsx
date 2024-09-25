import { useCreateVscodeConfigMutations } from '@hooks/reactQuery/mutation/useVscodeConfigMutations';
import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';

export default function ExtensionsDetailsList() {
  const { mutateAsync } = useCreateVscodeConfigMutations();
  const { showError } = useSnackbarStore();
  const { extensionsIds } = useExtensionStore();
  const extensionsQueries = useExtensionByIdsQueries(extensionsIds, {
    onError: () => {
      showError({ message: 'Failed to fetch extension details' });
    }
  });

  const handleShareList = () => {
    mutateAsync(extensionsIds).then((result) => {
      console.log('🚀 ~ mutateAsync ~ result:', result);
    });
  };

  return (
    <Stack direction="column" gap={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">Extension details</Typography>
        <Button variant="outlined" onClick={handleShareList}>
          Share list
        </Button>
      </Stack>
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
