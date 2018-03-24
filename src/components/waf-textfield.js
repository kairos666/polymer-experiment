import { Element as PolymerElement, html } from '../../node_modules/@polymer/polymer/polymer-element.js';
import { FlattenedNodesObserver } from '../../node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js';

export class WafTextfield extends PolymerElement {
    static get template() {
        return html`<div>
            <label class="waf-textfield__label" for$="[[_inputId]]">[[label]]</label>
            <slot></slot>
            <span class="waf-textfield__error">[[_errorText]]</span>
        </div>
        <style>
            :host {
                display: inline-block;
            }
            
            /**
            *  component skin
            **/
            /* ==========  fallback variables  ========== */
            /* ==========  fallback computed variables  ========== */
            .waf-textfield {
                position: relative;
                font-size: 16px;
                font-size: var(--input-text-font-size);
                display: inline-block;
                box-sizing: border-box;
                width: 300px;
                max-width: 100%;
                margin: 0;
                padding: 20px 0;
                padding: var(--input-text-vertical-spacing) 0;
            }
    
            .waf-textfield--align-right label, .waf-textfield--align-right ::slotted(input), .waf-textfield--align-right .waf-textfield__error {
                text-align: right;
            }
    
            .waf-textfield--full-width {
                width: 100%;
            }
    
            .waf-textfield ::slotted(input) {
                border: none;
                border-bottom: 1px solid rgba(0,0,0, 0.12);
                border-bottom: 1px solid var(--input-text-bottom-border-color);
                display: block;
                font-size: 16px;
                font-size: var(--input-text-font-size);
                font-family: "Helvetica", "Arial", sans-serif;
                font-family: var(--performance_font);
                margin: 0;
                padding: 4px 0;
                padding: var(--input-text-padding) 0;
                width: 100%;
                width: var(--input-text-width);
                background: none;
                text-align: left;
                color: inherit;
            }
            .waf-textfield ::slotted(input[type="number"]) {
                -moz-appearance: textfield;
            }
            .waf-textfield ::slotted(input[type="number"]::-webkit-inner-spin-button), .waf-textfield ::slotted(input[type="number"]::-webkit-outer-spin-button) {
                -webkit-appearance: none;
                margin: 0;
            }
            .waf-textfield.is-focused ::slotted(input) {
                outline: none;
            }
            .waf-textfield.is-invalid ::slotted(input) {
                border-color: rgb(211,47,47);
                border-color: var(--input-text-error-color);
                box-shadow: none;
            }
            fieldset[disabled] .waf-textfield ::slotted(input), .waf-textfield.is-disabled ::slotted(input) {
                background-color: transparent;
                border-bottom: 1px dotted rgba(0,0,0, 0.12);
                border-bottom: 1px dotted var(--input-text-disabled-color);
                color: rgba(0,0,0, 0.26);
                color: var(--input-text-disabled-text-color);
            }
    
            .waf-textfield__label {
                bottom: 0;
                color: rgba(0,0,0, 0.26);
                color: var(--input-text-label-color);
                font-size: 16px;
                font-size: var(--input-text-font-size);
                font-family: "Helvetica", "Arial", sans-serif;
                font-family: var(--performance_font);
                left: 0;
                right: 0;
                pointer-events: none;
                position: absolute;
                display: block;
                top: 24px;
                top: calc(var(--input-text-padding) + var(--input-text-vertical-spacing));
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-align: left;
            }
            .waf-textfield.is-dirty .waf-textfield__label, .waf-textfield.has-placeholder .waf-textfield__label {
                visibility: hidden;
            }
            .waf-textfield--floating-label .waf-textfield__label {
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
            .waf-textfield--floating-label.has-placeholder .waf-textfield__label {
                transition: none;
            }
            fieldset[disabled] .waf-textfield .waf-textfield__label, .waf-textfield.is-disabled.is-disabled .waf-textfield__label {
                color: rgba(0,0,0, 0.26);
                color: var(--input-text-disabled-text-color);
            }
            .waf-textfield--floating-label.is-focused .waf-textfield__label, .waf-textfield--floating-label.is-dirty .waf-textfield__label, .waf-textfield--floating-label.has-placeholder .waf-textfield__label {
                color: rgb(63,81,181);
                color: var(--input-text-highlight-color);
                font-size: 12px;
                font-size: var(--input-text-floating-label-fontsize);
                top: 4px;
                top: calc(var(--input-text-vertical-spacing) - (var(--input-text-floating-label-fontsize) + var(--input-text-padding)));
                visibility: visible;
            }
            .waf-textfield--floating-label.is-invalid .waf-textfield__label {
                color: rgb(211,47,47);
                color: var(--input-text-error-color);
                font-size: 12px;
                font-size: var(--input-text-floating-label-fontsize);
            }
            .waf-textfield__label:after {
                background-color: rgb(63,81,181);
                background-color: var(--input-text-highlight-color);
                bottom: 20px;
                content: '';
                height: 2px;
                left: 45%;
                position: absolute;
                transition-duration: 0.2s;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                visibility: hidden;
                width: 10px;
            }
            .waf-textfield.is-focused .waf-textfield__label:after {
                left: 0;
                visibility: visible;
                width: 100%;
            }
            .waf-textfield.is-invalid .waf-textfield__label:after {
                background-color: rgb(211,47,47);
                background-color: var(--input-text-error-color);
            }
    
            .waf-textfield__error {
                color: rgb(211,47,47);
                color: var(--input-text-error-color);
                position: absolute;
                font-size: 12px;
                font-size: var(--input-text-floating-label-fontsize);
                font-family: "Helvetica", "Arial", sans-serif;
                font-family: var(--performance_font);
                margin-top: 3px;
                visibility: hidden;
                display: block;
            }
            .waf-textfield.is-invalid .waf-textfield__error {
                visibility: visible;
            }
        </style>`
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
        this._isInvalid = false;
        this._inputId = undefined;
        this._errorText = 'wrong input';

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

    // errors processing
    _inputValidationProcessing() {
        // check validity
        this._isInvalid = !this._inputNode.checkValidity();

        // apply classes
        if ((this._isDirty && this._isInvalid) || this._inputNode.validity.valueMissing) {
            this.shadowRoot.firstElementChild.classList.toggle('is-invalid', true);
            // this.errorText = this.inputElement.validity;
        } else {
            this.shadowRoot.firstElementChild.classList.toggle('is-invalid', false);
        }
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
            let inputCount = 0;
            info.addedNodes.forEach(node => {
                if (node.nodeName === 'INPUT') {
                    inputCount++;
                    this._inputMutationObserver.disconnect();
                    this._inputNode = node;
                }
            });
            
            // update component according slot changes
            if (this._inputNode && inputCount === 1) {
                const shadowContainerClassList = this.shadowRoot.firstElementChild.classList;

                // initial dirty status then rely on change event
                this._isDirty = (this._inputNode.value !== '');
                shadowContainerClassList.toggle('is-dirty', this._isDirty);

                // bind behaviors handlers
                this._inputMutationObserver.observe(this._inputNode, { attributes: true });

                this._inputNode.addEventListener('focus', () => { shadowContainerClassList.add('is-focused') });
                this._inputNode.addEventListener('blur', () => { shadowContainerClassList.remove('is-focused') });
                this._inputNode.addEventListener('change', () => {
                    this._isDirty = (this._inputNode.value !== '');
                    shadowContainerClassList.toggle('is-dirty', this._isDirty);
                    this._inputValidationProcessing();
                });
                this._inputNode.addEventListener('keyup', () => { 
                    this._isDirty = (this._inputNode.value !== '');
                    shadowContainerClassList.toggle('is-dirty', this._isDirty);
                    this._inputValidationProcessing();
                });

                // initial status - placeholder, id, disabled
                this._inputMutationHandler();
            } else if(inputCount > 1) {
                // check for input after slot mutation
                console.warn('waf-textfield - more than one input element found');
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