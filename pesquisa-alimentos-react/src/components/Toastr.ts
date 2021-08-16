import {
  TOAST_WARNING,
  TOAST_ERROR,
  TOAST_SUCCESS,
  TOAST_INFO,
  ToastrConstant,
} from '../utils/GlobalConstants';
import { OptionsObject, SnackbarMessage, SnackbarKey } from 'notistack';

class Toastr {
  enqueueSnackbar?: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;

  toast(texto: string, variant: ToastrConstant, options: OptionsObject = {}): void {
    if (!this.enqueueSnackbar) return;

    this.enqueueSnackbar(texto, {
      autoHideDuration: 50000,
      persist: true,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
      ...options,
      ...variant,
    });
  }

  warning(texto: string): void {
    this.toast(texto, TOAST_WARNING);
  }

  warn(texto: string): void {
    this.toast(texto, TOAST_WARNING);
  }

  error(texto: string): void {
    this.toast(texto, TOAST_ERROR);
  }

  success(texto: string): void {
    this.toast(texto, TOAST_SUCCESS);
  }

  info(texto: string): void {
    this.toast(texto, TOAST_INFO);
  }
}

export default new Toastr();
