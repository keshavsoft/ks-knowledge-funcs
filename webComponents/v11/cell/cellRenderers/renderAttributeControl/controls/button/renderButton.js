import { applyButtonAttributes, applyCommonAttributes } from "../../applyAttributes.js";
import { createElement } from "./createElement.js";
import { attachEvents } from "./attachEvents.js";

export const renderButton = (element, ksAttributes) => {
    // 1. Create Element
    const button = createElement(ksAttributes);

    // 2. Apply Attributes
    applyCommonAttributes(button, ksAttributes);
    applyButtonAttributes(button, ksAttributes);

    // 3. Attach Events
    attachEvents(button, ksAttributes, element);

    // 4. Append to DOM
    element.appendChild(button);
};
