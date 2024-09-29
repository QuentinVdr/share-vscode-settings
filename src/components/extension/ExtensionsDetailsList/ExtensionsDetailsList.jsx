import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useState } from 'react';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';
import ExtensionsSaveDialog from '../ExtensionsSaveDialog/ExtensionsSaveDialog';

export default function ExtensionsDetailsList() {
  const { extensionIds } = useExtensionStore();
  const extensionsQueries = useExtensionByIdsQueries(extensionIds);
  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" gap={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">Extension details</Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Share list
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {extensionsQueries.map((query, index) => (
          <Grid key={extensionIds[index]} size={{ xs: 12, md: 6, xl: 4 }}>
            <ExtensionDetailCard extensionId={extensionIds[index]} extensionQuery={query} />
          </Grid>
        ))}
      </Grid>
      <ExtensionsSaveDialog open={open} handleClose={() => setOpen(false)} />
    </Stack>
  );
}
