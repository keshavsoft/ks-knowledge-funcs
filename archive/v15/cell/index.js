import { registerComponent } from "./componentRegister.js";
import { default as pullAttributes } from "./pullAttributes.js";
import { renderAttributeControl } from "./renderAttributeControl/index.js";

class KsTableCellContent extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        const ksAttributes = pullAttributes(this);
        const controlElement = renderAttributeControl(ksAttributes);
        console.log("jjjjjjjj : ", ksAttributes, this._config);

        if (controlElement) {
            this.appendChild(controlElement);
        };

        return ksAttributes;
    };
};

registerComponent({
    inComponentClass: KsTableCellContent,
    inTagName: "ks-cell-base",
    inVersion: "v11",
    inNamespaceKey: "classes"
});
