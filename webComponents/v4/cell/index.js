import { applyAttributes } from "./story/1-applyAttributes.js";
import { renderControl } from "./story/2-renderControl.js";
import { registerComponent } from "./componentRegister.js";

import { PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES, PREDEFINED_TEXT_CLASSES } from "./defaultClasses/index.js";

class KsTableCellContent extends HTMLElement {
    static get PREDEFINED_CLASSES() { return PREDEFINED_CLASSES; }
    static get PREDEFINED_BUTTON_CLASSES() { return PREDEFINED_BUTTON_CLASSES; }
    static get PREDEFINED_TEXT_CLASSES() { return PREDEFINED_TEXT_CLASSES; }

    constructor() {
        super();
        this._inputs = {};
    }

    set inputs(data) {
        this._inputs = data;
        this.render();
    }

    get inputs() {
        return this._inputs;
    }

    render() {
        let val = this._inputs.cellValue;
        const options = this._inputs.options || {};

        // Story 1: Clear and apply attributes
        applyAttributes(this, options);

        // Story 2: Render appropriate control based on data type and options
        renderControl(this, val, options);
    };

    get value() {
        const input = this.querySelector('input, select, textarea');
        if (input) {
            return input.type === 'checkbox' ? input.checked : input.value;
        }
        return undefined;
    }

    set value(newVal) {
        const input = this.querySelector('input, select, textarea');
        if (input) {
            if (input.type === 'checkbox') {
                input.checked = newVal;
            } else {
                input.value = newVal;
            }
        }
    }
};

registerComponent({
    inComponentClass: KsTableCellContent,
    inTagName: "ks-cell-base",
    inVersion: "v3",
    inNamespaceKey: "classes"
});
