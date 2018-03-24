import { Element as PolymerElement, html } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { FlattenedNodesObserver } from '../../node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js';

export class WafTextfield extends PolymerElement {
    static get template() {
        return html`<div>
            <label class="waf-textfield__label" for$="[[_inputId]]">[[label]]</label>
            <slot></slot>
            <span class="waf-textfield__error">wrong input</span>
        </div>`
    }

    static get properties() {
        return {
            float: { type: Boolean, value: false },
            alignRight: { type: Boolean, value: false },
            fullWidth: { type: Boolean, value: false },
            label: { type: String },
            errors: { type: Object }
        }
    }

    static get observers() {
        return [
            '_containerClassList(float, alignRight, fullWidth)'
        ]
    }

    constructor() {
        super();

        // private variables
        this._isDirty = false;
        this._isDisabled = false;
        this._hasPlaceholder = false;
        this._isFocused = false;
        this._inputId = undefined;

        this._inputNode = undefined;
        this._inputMutationObserver = new MutationObserver(this._inputMutationHandler.bind(this));
    }

    // container classes in shadowroot
    _containerClassList(isFloat, isAlignedRight, isFullWidth) {
        let baseClassesList = `waf-textfield ${(isFloat) ? 'waf-textfield--floating-label' : ''} ${(isAlignedRight) ? 'waf-textfield--align-right' : ''} ${(isFullWidth) ? 'waf-textfield--full-width' : ''}`;
        let behaviorClassesList = `${(this._isDirty) ? 'is-dirty' : ''} ${(this._isFocused) ? 'is-focused' : ''} ${(this._isDisabled) ? 'is-disabled' : ''} ${(this._hasPlaceholder) ? 'has-placeholder' : ''}`;
        this.shadowRoot.firstElementChild.setAttribute('class', `${baseClassesList} ${behaviorClassesList}`.trim());
    }

    // mutation handler for input
    _inputMutationHandler() {
        if(!this._inputNode.id) console.warn('waf-textfield - input must exist and have an ID');

        // keep reference in internal state
        this._inputId = (this._inputNode.id !== '') ? this._inputNode.id : 'missing ID';
        this._hasPlaceholder = (this._inputNode.placeholder !== '');
        this._isDisabled = this._inputNode.disabled;

        // apply change in container classes
        let shadowTargetClassList = this.shadowRoot.firstElementChild.classList;
        shadowTargetClassList.toggle('has-placeholder', this._hasPlaceholder);
        shadowTargetClassList.toggle('is-disabled', this._isDisabled);
    }

    connectedCallback() {
        super.connectedCallback();

        // monitor slot contents and bind input
        this._observer = new FlattenedNodesObserver(this, function(info) {
            // update input element
            info.removedNodes.forEach(node => {
                if (node.nodeName === 'INPUT') {
                    this._inputNode = undefined;
                    this._inputMutationObserver.disconnect();
                }
            });
            info.addedNodes.forEach(node => {
                if (node.nodeName === 'INPUT') {
                    this._inputMutationObserver.disconnect();
                    this._inputNode = node;
                }
            });
            
            // update component according slot changes
            if (this._inputNode) {
                const shadowContainerClassList = this.shadowRoot.firstElementChild.classList;
                
                // initial dirty status then rely on change event
                this._isDirty = (this._inputNode.value !== '');
                shadowContainerClassList.toggle('is-dirty', this._isDirty);

                // bind behaviors handlers
                this._inputMutationObserver.observe(this._inputNode, { attributes: true });

                this._inputNode.addEventListener('focus', () => { shadowContainerClassList.add('is-focused') });
                this._inputNode.addEventListener('blur', () => { shadowContainerClassList.remove('is-focused') });
                this._inputNode.addEventListener('change', () => { shadowContainerClassList.toggle('is-dirty', (this._inputNode.value !== '')) });
                this._inputNode.addEventListener('keyup', () => { shadowContainerClassList.toggle('is-dirty', (this._inputNode.value !== '')) });

                // initial status - placeholder, id, disabled
                this._inputMutationHandler();
            } else {
                // check for input after slot mutation
                console.warn('waf-textfield - no input element found');
            }
        });
    }
    
    disconnectedCallback() {
        super.disconnectedCallback();
        this._observer.disconnect();
        this._inputMutationObserver.disconnect();
    }
}

customElements.define('waf-textfield', WafTextfield);