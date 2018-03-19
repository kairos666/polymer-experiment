import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';

export class WafTextfield extends PolymerElement {
    static get template() {
        return `<div>This is my [[name]].</div>`
    }

    static get properties() {
        name: { Type: String }
    }

    constructor() {
        super();
        this.name = 'Google Material - floating text input';
    }
}

customElements.define('waf-textfield', WafTextfield);