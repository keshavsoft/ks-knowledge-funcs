export const hasValue = (value) => value !== undefined && value !== null;

export const setCellAttribute = (element, attributeName, value) => {
    if (!hasValue(value)) return;

    element.setAttribute(`ks-${attributeName}`, value);
};

export const getDefinedOverrides = ({ inText, inControlType, inValue, inList, inPlaceHolder, inTheme }) => {
    const overrides = {};

    if (hasValue(inText)) overrides.text = inText;
    if (hasValue(inControlType)) overrides.controlType = inControlType;
    if (hasValue(inValue)) overrides.value = inValue;
    if (hasValue(inList)) overrides.list = inList;
    if (hasValue(inPlaceHolder)) overrides.placeHolder = inPlaceHolder;
    if (hasValue(inTheme)) overrides.theme = inTheme;

    return overrides;
};

export const applyConfigAttributes = (element, config, attributeMap) => {
    for (const configKey in attributeMap) {
        setCellAttribute(element, attributeMap[configKey], config[configKey]);
    };
};

export const getHostClassName = ({ inConfig, inTheme, inClassName }) => {
    if (hasValue(inClassName) && inClassName !== "") return inClassName;
    if (hasValue(inConfig.hostClassName)) return inConfig.hostClassName;
    if (hasValue(inConfig.cellClassName)) return inConfig.cellClassName;
    if (typeof inTheme === "string") return inTheme;

    return "";
};
