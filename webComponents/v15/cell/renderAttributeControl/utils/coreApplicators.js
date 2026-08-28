import { ATTRIBUTE_PROPERTIES, BOOLEAN_ATTRIBUTES } from "../constants/attributeMaps.js";
import { hasValue, isAttributeTrue } from "./validation.js";

export const applyMappedAttributes = (element, ksAttributes, attributeMap) => {
    for (const ksKey in attributeMap) {
        const value = ksAttributes[ksKey];

        if (!hasValue(value)) continue;

        const attributeName = attributeMap[ksKey];
        const propertyName = ATTRIBUTE_PROPERTIES[attributeName] || attributeName;

        element.setAttribute(attributeName, value);

        if (propertyName in element) {
            element[propertyName] = value;
        }
    };
};

export const applyClass = (element, ksAttributes) => {
    const className = ksAttributes["class"] || ksAttributes["class-name"];

    if (!hasValue(className)) return;

    element.className = className;
};

export const applyBooleanAttributes = (element, ksAttributes, allowedAttributes) => {
    for (const ksKey of allowedAttributes) {
        if (!hasValue(ksAttributes[ksKey])) continue;

        const attributeName = BOOLEAN_ATTRIBUTES[ksKey];
        const propertyName = ATTRIBUTE_PROPERTIES[attributeName] || attributeName;
        const shouldApply = isAttributeTrue(ksAttributes[ksKey]);

        if (shouldApply) {
            element.setAttribute(attributeName, "");
        } else if (element.removeAttribute) {
            element.removeAttribute(attributeName);
        }

        if (propertyName in element) {
            element[propertyName] = shouldApply;
        }
    };
};
