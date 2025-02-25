export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.style.width = 'fit-content';
    this.disabled = this.getAttribute('disabled');
    this.tabIndex = this.disabled ? -1 : 0;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel='stylesheet' href='./components/Button/button.css'>
      <span enabled class='ds-button ${
        this.disabled ? 'ds-button--disabled' : ''
      }'>
        <slot class='ds-button__icon' name='left-icon'></slot>
        <slot></slot>
        <slot class='ds-button__icon' name='right-icon'></slot>
      </span>
    `;
  }
}
