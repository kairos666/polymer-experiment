// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
import {afterNextRender} from '../../node_modules/@polymer/polymer/lib/utils/render-status.js';

// Added "export" to export the MyApp symbol from the module
export class WafButton extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<div>This is my [[name]] app.</div>`
  }

  constructor() {
    super();
    this.name = 'polymer 3.0 pre 10 experiment';
    afterNextRender(this, () => {
      this.addEventListener('click', () => { console.log('button clicked') });
    });
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }

  // lifecycle hooks
  ready() {
    super.ready();
    console.info(`WafButton added to DOM for the first time`);
  }
  connectedCallback() {
    super.connectedCallback();
    console.info(`WafButton added to DOM`);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    console.info(`WafButton removed from DOM`);
  }
  attributeChangedCallback() {
    super.attributeChangedCallback();
    console.info(`WafButton something has changed`);
  }
}

customElements.define('waf-button', WafButton);