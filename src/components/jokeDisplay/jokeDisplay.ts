import { ButonAtt } from "../Button/button";
import { JkTextAtt } from "../jokeText/jokeText";
import { TitleAtt } from "../title/title";

export default class JKDisplay extends HTMLElement {
    tittle?: String;
    text?: String;
    cat?: String;

    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`
        <main-title></main-title>
        <section>
            <cat-button></cat-button>
        </section>
        <joke-text>
        `;
    }

}

customElements.define('jk-display', JKDisplay)