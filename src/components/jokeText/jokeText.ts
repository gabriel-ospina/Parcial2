export enum JkTextAtt {
    "text"="text"
}

export default class JkText extends HTMLElement{
    text?: String;

    static get observedAttributes(){
        const jkTextattrs: Record<JkTextAtt, null> = {
            text=null
        }
        return Object.keys(jkTextattrs)
    }


    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(
        propName: JkText | undefined,
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
        <section>
            <h1>${this.text}</h1>
            <h3>Chuck Norris</h3>
        </section>
        `;
    }

}

customElements.define('joke-text', JkText)