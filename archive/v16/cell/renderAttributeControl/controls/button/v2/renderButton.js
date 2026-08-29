import { attachEvents } from "../../attachEvents.js";

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

const BUTTON_ATTRIBUTES = {
    "form": "form",
    "type": "type",
    "value": "value"
};

const getCommonAttributes = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};
    const localResult = {};

    for (const [ksKey, attrName] of Object.entries(COMMON_ATTRIBUTES)) {
        const val = localKsAttributes[ksKey] ?? localKsAttributes[attrName];
        if (val !== undefined && val !== "") {
            localResult[attrName] = val;
        }
    }

    const className = localKsAttributes["class"] || localKsAttributes["class-name"] || localKsAttributes["className"];
    if (className) {
        localResult["class"] = className;
    }

    return localResult;
};

const getButtonAttributes = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};
    const localResult = {};

    for (const [ksKey, attrName] of Object.entries(BUTTON_ATTRIBUTES)) {
        const val = localKsAttributes[ksKey] ?? localKsAttributes[attrName];
        if (val !== undefined && val !== "") {
            localResult[attrName] = val;
        }
    }

    return localResult;
};

const createElement = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};

    const element = document.createElement("button");

    // Set basic properties
    element.textContent = localKsAttributes["text"] || localKsAttributes["labelText"] || localKsAttributes["text"] || "";
    element.disabled = localKsAttributes["disabled"] === true || localKsAttributes["disabled"] === "true";

    return element;
};

export const renderButton = ({ inKsAttributes } = {}) => {
    const localKsAttributes = inKsAttributes || {};

    // 1. Create Element
    const button = createElement({ inKsAttributes: localKsAttributes });

    // 2. Extract Attribute Configurations as Objects
    const localCommonAttrs = getCommonAttributes({ inKsAttributes: localKsAttributes });
    const localButtonAttrs = getButtonAttributes({ inKsAttributes: localKsAttributes });

    // 3. Combine Attributes
    const localFinalAttrs = { ...localCommonAttrs, ...localButtonAttrs };

    // 4. Apply Attributes to DOM Element
    Object.entries(localFinalAttrs).forEach(([attrName, val]) => {
        if (attrName === "class") {
            button.className = val;
        } else {
            button.setAttribute(attrName, val);
        }
    });

    // 5. Attach Events
    attachEvents({ inInput: button, inKsAttributes: localKsAttributes });

    // 6. Return the element
    return button;
};

export default renderButton;
