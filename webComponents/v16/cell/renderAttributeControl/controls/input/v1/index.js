import { applyCommonAttributes, applyInputAttributes } from "../../../applyAttributes.js";
import { attachEvents } from "../../attachEvents.js";

const startFunc = ({ inKsAttributes }) => {
    const input = document.createElement("input");

    input.type = inKsAttributes["type"] || "text";
    input.value = inKsAttributes["value"] || "";
    input.placeholder = inKsAttributes["place-holder"] || "";

    applyCommonAttributes(input, inKsAttributes);
    applyInputAttributes(input, inKsAttributes);

    attachEvents({ inInput: input, inKsAttributes });

    return input;
};

export default startFunc;
