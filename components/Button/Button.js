export class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        ${buttonStyles}
      </style>
      <span class='ds-button'>
        <slot class='ds-button__icon' name='left-icon'></slot>
        <slot></slot>
        <slot class='ds-button__icon' name='right-icon'></slot>
      </span>
    `;
  }
}

const buttonStyles = `
  .ds-button {
    background-color: #007bff;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ds-button:hover {
    background-color: #0056b3;
  }
  
  .ds-button__icon{
    margin: 0;
  }
`;
