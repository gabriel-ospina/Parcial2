import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const appCont = this.ownerDocument.createElement('app-container');
        const appDashboard = this.ownerDocument.createElement('jk-display')
        appCont.appendChild(appDashboard)
        
        this.shadowRoot?.appendChild(appCont);
    }
}

customElements.define('app-container', AppContainer)