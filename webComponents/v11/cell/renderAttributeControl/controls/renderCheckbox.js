import { applyCommonAttributes, applyInputAttributes, hasValue, isAttributeTrue } from "../applyAttributes.js";

export const renderCheckbox = (ksAttributes) => {
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    if (hasValue(ksAttributes["value"])) {
        checkbox.value = ksAttributes["value"];
    }

    checkbox.checked = hasValue(ksAttributes["checked"])
        ? isAttributeTrue(ksAttributes["checked"])
        : ksAttributes["value"] === "true";

    applyCommonAttributes(checkbox, ksAttributes);
    applyInputAttributes(checkbox, ksAttributes);

    return checkbox;
};
