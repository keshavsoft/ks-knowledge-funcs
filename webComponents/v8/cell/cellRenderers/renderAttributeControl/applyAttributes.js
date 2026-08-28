const COMMON_ATTRIBUTES = {
    "aria-described-by": "aria-describedby",
    "aria-label": "aria-label",
    "data-key": "data-key",
    "dir": "dir",
    "id": "id",
    "name": "name",
    "role": "role",
    "tab-index": "tabindex",
    "title": "title"
};

const INPUT_ATTRIBUTES = {
    "autocomplete": "autocomplete",
    "list": "list",
    "max": "max",
    "max-length": "maxlength",
    "min": "min",
    "min-length": "minlength",
    "pattern": "pattern",
    "size": "size",
    "step": "step"
};

const BUTTON_ATTRIBUTES = {
    "form": "form",
    "form-action": "formaction",
    "form-enctype": "formenctype",
    "form-method": "formmethod",
    "form-target": "formtarget"
};

const LABEL_ATTRIBUTES = {
    "for": "for"
};

const ATTRIBUTE_PROPERTIES = {
    "class": "className",
    "for": "htmlFor",
    "formnovalidate": "formNoValidate",
    "maxlength": "maxLength",
    "minlength": "minLength",
    "readonly": "readOnly",
    "tabindex": "tabIndex"
};

const BOOLEAN_ATTRIBUTES = {
    "autofocus": "autofocus",
    "checked": "checked",
    "disabled": "disabled",
    "form-no-validate": "formnovalidate",
    "multiple": "multiple",
    "read-only": "readonly",
    "readonly": "readonly",
    "required": "required",
    "spellcheck": "spellcheck"
};

export const hasValue = (value) => value !== undefined && value !== null;

export const isAttributeTrue = (value) => {
    if (value === true || value === "") return true;
    if (value === false) return false;

    return String(value).toLowerCase() === "true";
};

const applyMappedAttributes = (element, ksAttributes, attributeMap) => {
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

const applyClass = (element, ksAttributes) => {
    const className = ksAttributes["class"] || ksAttributes["class-name"];

    if (!hasValue(className)) return;

    element.className = className;
};

const applyBooleanAttributes = (element, ksAttributes, allowedAttributes) => {
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

export const applyCommonAttributes = (element, ksAttributes) => {
    applyClass(element, ksAttributes);
    applyMappedAttributes(element, ksAttributes, COMMON_ATTRIBUTES);
};

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

export const applyButtonAttributes = (element, ksAttributes) => {
    applyMappedAttributes(element, ksAttributes, BUTTON_ATTRIBUTES);
    applyBooleanAttributes(element, ksAttributes, [
        "autofocus",
        "disabled",
        "form-no-validate"
    ]);
};

export const applyLabelAttributes = (element, ksAttributes) => {
    applyMappedAttributes(element, ksAttributes, LABEL_ATTRIBUTES);
};
