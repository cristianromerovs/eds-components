import ButtonPrimary from './components/buttons/primaryButton'
import Breadcrumb from './components/breadcrumbs/breadcrumb'

export default { ButtonPrimary, Breadcrumb }

customElements.define("eds-button", ButtonPrimary);
customElements.define("eds-breadcrumb", Breadcrumb);