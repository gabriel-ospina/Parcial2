class Dashboard extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <jk-display></jk-display>
            `;

        }
    }
}

customElements.define('app-dashboard', Dashboard)