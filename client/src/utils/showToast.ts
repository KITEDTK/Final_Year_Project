import { toast, ToastOptions, ToastTransitionProps } from 'react-toastify';
import { Bounce } from 'react-toastify'; // Assuming Bounce is imported from react-toastify

type ToastType = 'success' | 'info' | 'error';

export const showToast = (message: string | JSX.Element, type: ToastType) => {
  const options: ToastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce as React.ComponentType<ToastTransitionProps>,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'info':
      toast.info(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    default:
      toast.info(message, options); // Default to info if type is not recognized
      break;
  }
};

