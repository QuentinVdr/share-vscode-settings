import { useSnackbarStore } from '@stores/SnackbarStore';

/**
 * Method used to handle HTTP error
 * and display alert snackbar error to give some context on what happened to the user
 * @param error HTTP error received
 * @param showError Method used to display an alert (error level) in a snackbar
 */
const handleErrors = (error) => {
  const { showError } = useSnackbarStore.getState();
  if (!error.response) {
    showError({ message: 'No response from the server', duration: 'normal' });
  } else {
    console.error(error);
  }
};

export default handleErrors;
