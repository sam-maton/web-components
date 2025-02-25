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

    this.addEventListener('click', (e) => {
      if (!this.disabled && this.onClick) {
        this.onClick(e);
      }
    });

    this.addEventListener('keydown', (e) => {
      if (!this.disabled && e.key === 'Enter' && this.onClick) {
        this.onClick(e);
      }
    });
  }

  set onClick(callback) {
    this._onClick = callback;
  }

  get onClick() {
    return this._onClick;
  }
}
