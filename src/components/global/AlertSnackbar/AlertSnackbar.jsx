import { Alert, Slide, Snackbar } from '@mui/material';
import { useSnackbarStore } from '@stores/SnackbarStore';
import { Arrays } from '@utils/ArrayUtils';
import { useEffect, useState } from 'react';
import styles from './AlertSnackbar.module.scss';

/**
 * Component used to inform users of a process that an app has performed or will perform
 */
export const AlertSnackbar = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const snackbarQueue = useSnackbarStore((state) => state.snackbarQueue);
  const setSnackbarQueue = useSnackbarStore((state) => state.setSnackbarQueue);

  /**
   * Handle the adding of new snackbars in the queue and the changes of currentSnackbar state
   */
  useEffect(() => {
    if (snackbarQueue.length > 0) {
      setIsSnackbarOpen(true);
    }
  }, [snackbarQueue]);

  /**
   * Method used to handle the closing of a snackbar
   * @param event event (unused parameter)
   * @param reason reason of the closing
   */
  const handleClose = (event, reason) => {
    //Disable the closing of the snackbar on clicking away
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  /** Methods that handle the end of the snackbar animation (after closed event) */
  const handleExit = () => {
    setSnackbarQueue(snackbarQueue.toSpliced(0, 1));
  };

  if (Arrays.isEmpty(snackbarQueue)) {
    return <></>;
  }

  const currentSnackbar = snackbarQueue[0];

  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={currentSnackbar.autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={SlideUp}
      TransitionProps={{ onExited: handleExit }}
      disableWindowBlurListener={true}
    >
      <Alert
        onClose={(event, reason) => handleClose(event, reason)}
        severity={currentSnackbar.severity}
        className={styles.alert}
      >
        {currentSnackbar.message}
        {currentSnackbar.autoHideDuration && (
          <div className={`${styles.progressBar} hideAfter${currentSnackbar.autoHideDuration}`} />
        )}
      </Alert>
    </Snackbar>
  );
};

/** Transition component for the snackbar */
const SlideUp = (props) => <Slide {...props} direction="up" />;
