import { createButton } from "./story/1-createButton.js";
import { applyStyles } from "./story/2-applyStyles.js";
import { applyAttributes } from "./story/3-applyAttributes.js";
import { applyEvents } from "./story/4-applyEvents.js";

export const renderButton = (element, options) => {
    const btn = createButton(options);
    applyStyles(btn, options);
    applyAttributes(btn, options);
    applyEvents(btn, options);
    element.appendChild(btn);
};
