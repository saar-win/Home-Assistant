class StateAttributeElement extends HTMLElement {
}
}
setConfig(config) {
if (!config.entity) {
  throw new Error('You need to define an entity');
this.config = JSON.parse(JSON.stringify(config));
if (!this.config.show_empty) {
  this.config.show_empty = false;
}
if (!config.attribute) {
  throw new Error('You need to define an attribute');
}
if (!config.show_empty) {
  config.show_empty = false;
}
this.config = config;
}

  getCardSize() {
    return 1;
  }
}
customElements.define('state-attribute-element', StateAttributeElement);
