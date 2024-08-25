import {
  i
} from "./chunk.XHSHLALN.js";

// src/components/divider/divider.styles.ts
var divider_styles_default = i`
  :host {
    --color: var(--p-panel-border-color);
    --width: var(--p-panel-border-width);
    --spacing: var(--p-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

export {
  divider_styles_default
};
