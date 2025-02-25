import { Button } from './components/Button/Button.js';

customElements.define('web-button', Button);

const clickExample = document.getElementById('click-example');

clickExample.onClick = () => {
  alert('clicked');
};
