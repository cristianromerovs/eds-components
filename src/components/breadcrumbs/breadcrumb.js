import { html, LitElement, css } from 'lit'

export default class Breadcrumb extends LitElement {
  static styles = css`
    .breadcrumb { 
        display: flex;
    }

    .breadcrumb a {
        margin: 0 10px;
    }

  `;

  render() {
    return html `
    <div class="breadcrumb">
        <a href="#" class="">Link 1</a>
        <a href="#" class="">Link 2</a>
    </div>`
  }
}
