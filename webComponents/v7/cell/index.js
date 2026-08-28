import { registerComponent } from "./componentRegister.js";
import { default as pullAttributes } from "./pullAttributes.js";

class KsTableCellContent extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        this.render();
    };

    render() {
        const ksAttributes = pullAttributes(this);
        console.log("aaaaaaaaa : ", ksAttributes);

        if (ksAttributes["control-type"] === "label") {
            const lable = document.createElement("label");
            lable.textContent = "kkkkkkkkk";
            this.appendChild(lable);
        };

        return ksAttributes;
    };
};

registerComponent({
    inComponentClass: KsTableCellContent,
    inTagName: "ks-cell-base",
    inVersion: "v3",
    inNamespaceKey: "classes"
});
