import { generateHeader } from "./generateHeader.js";
import generateFooter from "./generateFooter.js";
import { composeOrder } from "./composeOrder.js";
import { registerComponent } from "./componentRegister.js";
import defaultOptions from "./defaultOptions.json" with { type: "json" };

export class ksHorizontalForm extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const userConfig = this.config || {};
        const isConfigProvided = this.config !== undefined;

        // If the user explicitly provided a config object, we strictly use it. 
        // Omitted sections will evaluate to undefined and won't be rendered.
        // If no config object is provided, we fall back to legacy props or defaultOptions.
        const config = isConfigProvided ? {
            head: userConfig.head,
            body: userConfig.body,
            foot: userConfig.foot,
            order: userConfig.order || defaultOptions.order
        } : {
            head: this._head !== undefined ? this._head : defaultOptions.head,
            body: this._body !== undefined ? this._body : defaultOptions.body,
            foot: this._foot !== undefined ? this._foot : defaultOptions.foot,
            order: this._order !== undefined ? this._order : defaultOptions.order
        };

        const headElement = generateHeader(config.head);
        const footElement = generateFooter(config.foot);

        const elements = {
            head: headElement,
            foot: footElement
        };

        composeOrder(this, elements, config.order);
    };
};

registerComponent({
    inComponentClass: ksHorizontalForm,
    inTagName: "ks-horizontal-form",
    inVersion: "v22",
    inNamespaceKey: "composite"
});

ksHorizontalForm.defaultOptions = defaultOptions;