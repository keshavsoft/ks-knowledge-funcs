import { applyCommonAttributes, applyLabelAttributes } from "../applyAttributes.js";

export const renderLabel = (ksAttributes) => {
    const label = document.createElement("label");

    label.textContent = ksAttributes["text"] || "";
    applyCommonAttributes(label, ksAttributes);
    applyLabelAttributes(label, ksAttributes);

    return label;
};
