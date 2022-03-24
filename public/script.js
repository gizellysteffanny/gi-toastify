import { Toast } from '../package/Toast.js';

console.log(Toast);

document.querySelector('button').addEventListener('click', () => {
   new Toast({
      position: 'top-right',
      text: 'Woah >.<', 
      onClose: () => {},
      canClose: true,
      autoClose: 3000,
   });
}); 

