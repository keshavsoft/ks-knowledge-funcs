import { applyButtonAttributes, applyCommonAttributes } from "../applyAttributes.js";

export const renderButton = (element, ksAttributes) => {
    const button = document.createElement("button");

    if (ksAttributes["type"]) {
        button.type = ksAttributes["type"];
    };

    button.textContent = ksAttributes["text"] || "";
    applyCommonAttributes(button, ksAttributes);
    applyButtonAttributes(button, ksAttributes);

    element.appendChild(button);
};
