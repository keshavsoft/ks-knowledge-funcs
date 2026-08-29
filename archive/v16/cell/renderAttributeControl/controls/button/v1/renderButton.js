import { applyButtonAttributes, applyCommonAttributes } from "../../../applyAttributes.js";
import { createElement } from "./createElement.js";
import { attachEvents } from "./attachEvents.js";

export const renderButton = ({ inKsAttributes } = {}) => {
    // 1. Create Element
    const button = createElement(inKsAttributes);

    // 2. Apply Attributes
    applyCommonAttributes(button, inKsAttributes);
    applyButtonAttributes(button, inKsAttributes);

    // 3. Attach Events
    attachEvents(button, inKsAttributes);

    // 4. Return the element
    return button;
};
