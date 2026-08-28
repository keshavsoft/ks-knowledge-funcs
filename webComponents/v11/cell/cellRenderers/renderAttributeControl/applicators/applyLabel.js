import { LABEL_ATTRIBUTES } from "../constants/attributeMaps.js";
import { applyMappedAttributes } from "../utils/coreApplicators.js";

export const applyLabelAttributes = (element, ksAttributes) => {
    applyMappedAttributes(element, ksAttributes, LABEL_ATTRIBUTES);
};
