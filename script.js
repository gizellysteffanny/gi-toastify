import Toast from './Toast.js';


document.querySelector('button').addEventListener('click', () => {
   new Toast({
      position: 'top-right',
      text: 'Woah >.<', 
      onClose: () => {},
      canClose: true,
      autoClose: 3000,
   });
}); 

