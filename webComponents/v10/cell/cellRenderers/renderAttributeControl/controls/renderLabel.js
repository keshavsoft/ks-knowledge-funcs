import { applyCommonAttributes, applyLabelAttributes } from "../applyAttributes.js";

export const renderLabel = (element, ksAttributes) => {
    const label = document.createElement("label");

    label.textContent = ksAttributes["text"] || "";
    applyCommonAttributes(label, ksAttributes);
    applyLabelAttributes(label, ksAttributes);

    element.appendChild(label);
};
