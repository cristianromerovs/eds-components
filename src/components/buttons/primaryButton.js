import { html, LitElement, css } from 'lit'

export default class ButtonPrimary extends LitElement {
  static styles = css`
    a { 
      background-color: blue;
      color: #fff;
      border-radius: 100px;
      width: 240px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  `;

  render() {
    return html `<a href="#" class="eds-btn-primary">Primary button</a>`
  }
}