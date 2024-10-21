import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const ExtensionsInstallDialog = ({ open, handleClose, extensionIds }) => {
  const command = `ext install ${extensionIds.join(' ')}`;

  const copyInstallCommand = () => {
    navigator.clipboard.writeText(command);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle variant="h3" fontWeight="bold">
        Install Extensions
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          To install these extension you need to copy the command. Then go to vscode use ctrl + p and paste the command
        </Typography>
        <Typography variant="caption">{command}</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={copyInstallCommand}>
          Copy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ExtensionsInstallDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  extensionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};
