import {
  spinner_styles_default
} from "./chunk.F5ABMK3Q.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  PureElement
} from "./chunk.ZOLM25O6.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";

// src/components/spinner/spinner.component.ts
var PSpinner = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return ke`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
PSpinner.styles = [component_styles_default, spinner_styles_default];

export {
  PSpinner
};
