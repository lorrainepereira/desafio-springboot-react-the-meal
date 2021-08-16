export interface ToastrConstant {
  variant: 'success' | 'error' | 'info' | 'warning';
}

export const TOAST_SUCCESS: ToastrConstant = { variant: 'success' };
export const TOAST_ERROR: ToastrConstant = { variant: 'error' };
export const TOAST_INFO: ToastrConstant = { variant: 'info' };
export const TOAST_WARNING: ToastrConstant = { variant: 'warning' };

export const MEDIA_TYPE_PDF = 'application/pdf';

export const HTTP_ERROR_400 = 400;
export const HTTP_ERROR_403 = 403;
