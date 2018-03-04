// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
import { PaperInput } from '../node_modules/@polymer/paper-input/paper-input.js';

// Added "export" to export the MyApp symbol from the module
export class App extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `<div>This is my [[name]] app.</div><paper-input always-float-label label="Floating label"></paper-input>`
  }

  constructor() {
    super();
    this.name = 'polymer 3.0 pre 10 experiment';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('my-app', App);