import {
  spinner_styles_default
} from "./chunk.BXR6BMH5.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  PureElement
} from "./chunk.2WNLI6SE.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";

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
