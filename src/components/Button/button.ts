export enum ButonAtt {
    "cat"="cat"
}

export default class ButtonCategories extends HTMLElement{
    cat?: String;

    static get observedAttributes(){

        const titattrs: Record<ButonAtt, null> = {
            cat=null,
        }
        return Object.keys(titattrs)
    }


    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(
        propName: ButonAtt | undefined,
        _: string,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        };
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <button>${this.cat}</button>
        `;
    }
}

customElements.define('cat-button', ButtonCategories)