import {
  spinner_styles_default
} from "./chunk.PRCS6XHL.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  PureElement
} from "./chunk.F7OLFLXT.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";

// src/components/spinner/spinner.component.ts
var PSpinner = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
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
