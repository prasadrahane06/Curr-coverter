import Toast from 'react-native-toast-message';

export const ApiSuccessToast = (text: string) =>
  Toast.show({
    type: 'success',
    text1: text,
    position: 'bottom',
  });
export const ApiErrorToast = (text: string) =>
  Toast.show({
    type: 'error',
    text1: text,
    position: 'bottom',
  });
