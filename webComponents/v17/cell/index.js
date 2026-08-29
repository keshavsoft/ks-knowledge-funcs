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
        const finalConfig = pullAttributes(this);
        const controlElement = renderAttributeControl(finalConfig);
        // console.log("finalConfig : ", finalConfig);

        if (controlElement) {
            this.replaceChildren(controlElement);
        };

        return finalConfig;
    };
};

registerComponent({
    inComponentClass: KsTableCellContent,
    inTagName: "ks-cell-base",
    inVersion: "v17",
    inNamespaceKey: "classes"
});
