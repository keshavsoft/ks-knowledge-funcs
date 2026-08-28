import { resolveConfig } from "./resolvers/resolveConfig.js";
import { resolveTheme } from "./resolvers/resolveTheme.js";
import { applyThemeWrapper } from "./modifiers/applyThemeWrapper.js";
import { generateElements } from "./generators/generateElements.js";
import { composeOrder } from "./utils/composeOrder.js";
import { registerComponent } from "./utils/componentRegister.js";

class ksHorizontalForm extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        // 1. Resolve Data
        const localConfig = resolveConfig({ inContext: this });
        const localTheme = resolveTheme({ inContext: this });

        // 2. Apply wrapper theme styles
        applyThemeWrapper({ inContext: this, inTheme: localTheme });
        console.log("llllllllllllllll");

        // 3. Generate child elements
        const localElements = generateElements({ inConfig: localConfig, inTheme: localTheme });

        // 4. Append to DOM in correct order
        composeOrder({ inContext: this, inElements: localElements, inOrder: localConfig.order });
    };
};

registerComponent({
    inComponentClass: ksHorizontalForm,
    inTagName: "ks-wrapper-base",
    inVersion: "v7",
    inNamespaceKey: "composite"
});