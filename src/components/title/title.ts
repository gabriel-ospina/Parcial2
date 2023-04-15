export enum TitleAtt {
    "tittle"="tittle"
}

export default class Title extends HTMLElement {
    tittle?: String;

    static get observedAttributes(){

        const titattrs: Record<TitleAtt, null> = {
            tittle=null
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
        propName: TitleAtt | undefined,
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
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>${this.tittle}</h1>
            `
        }
    }

}

customElements.define('main-title', Title)