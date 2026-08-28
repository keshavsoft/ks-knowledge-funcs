import { INPUT_ATTRIBUTES } from "../constants/attributeMaps.js";
import { applyMappedAttributes, applyBooleanAttributes } from "../utils/coreApplicators.js";

export const applyInputAttributes = (element, ksAttributes) => {
    applyMappedAttributes(element, ksAttributes, INPUT_ATTRIBUTES);
    applyBooleanAttributes(element, ksAttributes, [
        "autofocus",
        "checked",
        "disabled",
        "multiple",
        "read-only",
        "readonly",
        "required",
        "spellcheck"
    ]);
};
