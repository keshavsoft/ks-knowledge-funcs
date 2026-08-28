import { registerComponent } from "./componentRegister.js";
import { default as pullAttributes } from "./pullAttributes.js";
import { renderAttributeControl } from "./cellRenderers/renderAttributeControl/index.js";

class KsTableCellContent extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        const ksAttributes = pullAttributes(this);
        renderAttributeControl(this, ksAttributes);

        return ksAttributes;
    };
};

registerComponent({
    inComponentClass: KsTableCellContent,
    inTagName: "ks-cell-base",
    inVersion: "v3",
    inNamespaceKey: "classes"
});
