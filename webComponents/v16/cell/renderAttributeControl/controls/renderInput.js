import { applyCommonAttributes, applyInputAttributes } from "../applyAttributes.js";
import { attachEvents } from "./attachEvents.js";

export const renderInput = (ksAttributes) => {
    const input = document.createElement("input");
    // console.log("ksAttributes : ", ksAttributes);

    input.type = ksAttributes["type"] || "text";
    input.value = ksAttributes["value"] || "";
    input.placeholder = ksAttributes["place-holder"] || "";

    applyCommonAttributes(input, ksAttributes);
    applyInputAttributes(input, ksAttributes);

    attachEvents({ inInput: input, inKsAttributes: ksAttributes });

    return input;
};
