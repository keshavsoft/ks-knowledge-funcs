import { COMMON_ATTRIBUTES } from "../constants/attributeMaps.js";
import { applyMappedAttributes, applyClass } from "../utils/coreApplicators.js";

export const applyCommonAttributes = (element, ksAttributes) => {
    applyClass(element, ksAttributes);
    applyMappedAttributes(element, ksAttributes, COMMON_ATTRIBUTES);
};
