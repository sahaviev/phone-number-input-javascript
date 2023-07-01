import './style.css';
import { formatPhonePlugin } from './format-phone-plugin.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container text-center">
    <input type="tel" id="phone" maxlength="16" placeholder="mobile number" autocomplete="off" />
    <div><label for="phone">(123) 456-7890</label></div>
  </div>
`;

const phoneInput = document.querySelector('#phone');

if (phoneInput) {
  formatPhonePlugin(phoneInput);
}
