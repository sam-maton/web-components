export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.tabIndex = 0;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link rel='stylesheet' href='./components/Button/button.css'>
      <span class='ds-button'>
        <slot class='ds-button__icon' name='left-icon'></slot>
        <slot></slot>
        <slot class='ds-button__icon' name='right-icon'></slot>
      </span>
    `;
  }
}
