import Swal from 'sweetalert2/src/sweetalert2';
import '@sweetalert2/theme-dark/dark.css';
import './styles.css';

const getAlert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    background: '#191919',
    timerProgressBar: true,
    onOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
    customClass: {
      container: 'container-class',
      popup: 'popup-class',
      header: 'header-class',
      title: `title-class`,
      closeButton: 'close-button-class',
      icon: 'icon-class',
      image: 'image-class',
      content: 'content-class',
      input: 'input-class',
      actions: 'actions-class',
      confirmButton: 'confirm-button-class',
      cancelButton: 'cancel-button-class',
      footer: 'footer-class',
    },
  });
  return Toast;
};

// eslint-disable-next-line import/prefer-default-export
export const triggerAlert = data => {
  const toast = getAlert();
  toast.fire(data);
};
