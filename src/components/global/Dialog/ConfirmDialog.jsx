import { ConfirmDialogContext } from '@contexts/ConfirmDialogContext';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';

/** Define component props */
ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  agreeMessage: PropTypes.string.isRequired,
  disagreeMessage: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onRefuse: PropTypes.func.isRequired
};

/**
 * The appearance of the confirm dialog button
 * To be used with confirm dialog context {@link ConfirmDialogContext}
 * @returns A simple dialog with a title, description and two buttons
 */
export default function ConfirmDialog({ title, description, agreeMessage, disagreeMessage, onAccept, onRefuse }) {
  const { open } = useContext(ConfirmDialogContext);
  return (
    <Dialog
      open={open}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onAccept();
        }
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>

      <DialogActions>
        {/* Closes the dialog without any change */}
        <Button onClick={onRefuse}>{disagreeMessage}</Button>

        {/* Closes the dialog and continues */}
        <Button onClick={onAccept}>{agreeMessage}</Button>
      </DialogActions>
    </Dialog>
  );
}
