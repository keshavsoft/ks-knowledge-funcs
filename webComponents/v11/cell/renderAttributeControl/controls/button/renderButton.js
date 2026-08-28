import { applyButtonAttributes, applyCommonAttributes } from "../../applyAttributes.js";
import { createElement } from "./createElement.js";
import { attachEvents } from "./attachEvents.js";

export const renderButton = (ksAttributes) => {
    // 1. Create Element
    const button = createElement(ksAttributes);

    // 2. Apply Attributes
    applyCommonAttributes(button, ksAttributes);
    applyButtonAttributes(button, ksAttributes);

    // 3. Attach Events
    attachEvents(button, ksAttributes);

    // 4. Return the element
    return button;
};
