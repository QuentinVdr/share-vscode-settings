import { Button, Stack, TextField, Typography } from '@mui/material';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { validateExtensionIds } from '@utils/ExtensionUtils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtensionsInput() {
  const [extensions, setExtensions] = useState('');
  const { setExtensionsIds } = useExtensionStore();
  const { showInfo, showError } = useSnackbarStore();
  const navigate = useNavigate();

  const onFetchClick = () => {
    const { extensionIds, extensionValid } = validateExtensionIds(extensions);
    if (extensionValid) {
      setExtensionsIds(extensionIds);
      showInfo({ message: 'Fetching details for the provided extensions' });
      navigate('/extensions-detail');
    } else {
      showError({ message: 'Invalid extension ids' });
    }
  };

  return (
    <Stack direction="column" gap={2}>
      <Typography variant="body1">
        Use `code --list-extensions` to export the list of your VSCode extension and collapse them bellow
      </Typography>
      <TextField
        label="Extension ids"
        multiline
        placeholder="alefragnani.project-manager
VisualStudioExptTeam.vscodeintellicode"
        value={extensions}
        onChange={(e) => {
          setExtensions(e.target.value);
        }}
      />
      <Button variant="contained" onClick={onFetchClick}>
        Fetch details
      </Button>
    </Stack>
  );
}
