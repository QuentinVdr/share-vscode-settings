import ExtensionsDetailsList from '@components/extension/ExtensionsDetailsList/ExtensionsDetailsList';
import ExtensionsSaveDialog from '@components/extension/ExtensionsSaveDialog/ExtensionsSaveDialog';
import { Button, Stack, Typography } from '@mui/material';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtensionDetails() {
  const { extensionIds } = useExtensionStore();
  console.log('🚀 ~ ExtensionDetails ~ extensionIds:', extensionIds);
  const navigate = useNavigate();

  useEffect(() => {
    if (extensionIds.length === 0) {
      navigate('/');
    }
  }, [extensionIds]);

  const [open, setOpen] = useState(false);

  return (
    <Stack direction="column" gap={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h1">Extension details</Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Share list
        </Button>
      </Stack>
      <ExtensionsDetailsList extensionIds={extensionIds} />
      <ExtensionsSaveDialog open={open} handleClose={() => setOpen(false)} />
    </Stack>
  );
}
