import { applyCommonAttributes, applyInputAttributes } from "../applyAttributes.js";

export const renderInput = (element, ksAttributes) => {
    const input = document.createElement("input");

    input.type = ksAttributes["type"] || "text";
    input.value = ksAttributes["value"] || "";
    input.placeholder = ksAttributes["place-holder"] || "";

    applyCommonAttributes(input, ksAttributes);
    applyInputAttributes(input, ksAttributes);

    element.appendChild(input);
};
