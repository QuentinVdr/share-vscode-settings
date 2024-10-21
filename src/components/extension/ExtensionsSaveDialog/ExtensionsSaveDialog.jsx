import { useCreateVscodeConfigMutations } from '@hooks/reactQuery/mutation/useVscodeConfigMutations';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useExtensionStore } from '@stores/extension/extensionStore';
import { useSnackbarStore } from '@stores/SnackbarStore';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ExtensionsSaveDialog({ open, handleClose }) {
  const { showSuccess, showError } = useSnackbarStore();
  const mutation = useCreateVscodeConfigMutations({
    onSuccess: (result) => {
      setExtensionListId(result._id);
    },
    onError: () => {
      showError({ message: 'Failed to save the extension list', duration: 'normal' });
    }
  });
  const { extensionIds } = useExtensionStore();
  const [extensionListId, setExtensionListId] = useState('');

  const saveExtension = () => {
    mutation.mutateAsync({ extensionIds });
  };

  const sharedListSave = () => {
    const link = `${window.location.origin}/extension-details/${extensionListId}`;
    navigator.clipboard.writeText(link);
    showSuccess({
      message: `Link copied to clipboard: ${link}`,
      duration: 'normal'
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle variant="h3" fontWeight="bold">
        Save extension list to shared it
      </DialogTitle>

      {mutation.isPending && <CircularProgress className="loader" />}

      {!mutation.isPending && mutation.isSuccess && (
        <>
          <DialogContent>
            <Typography variant="body1">
              The extension list has been saved with the id:{' '}
              <Typography component="span" variant="body1" fontWeight="bold">
                {extensionListId}
              </Typography>
            </Typography>
            <Typography variant="body1">Copy the link and shared it</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={sharedListSave}>
              Copy link
            </Button>
          </DialogActions>
        </>
      )}

      {!mutation.isPending && !mutation.isSuccess && (
        <>
          <DialogContent>
            <Typography variant="body1">
              By saving the extension list, you can share it with your friend, but it will only be{' '}
              <Typography component="span" variant="body1" fontWeight="bold">
                saved for a week
              </Typography>
              .
            </Typography>
            {mutation.isError && (
              <Typography variant="caption" color="error">
                If the error persists, contact an admin
              </Typography>
            )}
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => saveExtension()}>
              Save
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

ExtensionsSaveDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};
