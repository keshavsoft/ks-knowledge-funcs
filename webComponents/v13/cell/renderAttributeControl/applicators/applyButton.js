import { BUTTON_ATTRIBUTES } from "../constants/attributeMaps.js";
import { applyMappedAttributes, applyBooleanAttributes } from "../utils/coreApplicators.js";

export const applyButtonAttributes = (element, ksAttributes) => {
    applyMappedAttributes(element, ksAttributes, BUTTON_ATTRIBUTES);
    applyBooleanAttributes(element, ksAttributes, [
        "autofocus",
        "disabled",
        "form-no-validate"
    ]);
};
