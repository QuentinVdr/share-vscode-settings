import { Button, Stack, TextField, Typography } from '@mui/material';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { validateExtensionIds } from '@utils/ExtensionUtils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExtensionsInput() {
  const { extensionIds, setExtensionIds } = useExtensionStore();
  const { showInfo, showError } = useSnackbarStore();
  const navigate = useNavigate();
  const [extensions, setExtensions] = useState(extensionIds.join('\n') || '');

  const onFetchClick = () => {
    const { extensionIds: validExtensionIds, extensionValid } = validateExtensionIds(extensions.trim());
    if (extensionValid) {
      setExtensionIds(validExtensionIds);
      showInfo({ message: 'Fetching details for the provided extensions' });
      navigate('/extension-details');
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
        View details
      </Button>
    </Stack>
  );
}
