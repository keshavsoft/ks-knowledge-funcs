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

const getInputAttributes = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};
    const localResult = {};

    for (const [ksKey, attrName] of Object.entries(INPUT_ATTRIBUTES)) {
        const val = localKsAttributes[ksKey] ?? localKsAttributes[attrName];
        if (val !== undefined && val !== "") {
            localResult[attrName] = val;
        }
    }

    return localResult;
};

const startFunc = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};
    const input = document.createElement("input");

    // 1. Basic Input properties
    input.type = localKsAttributes["type"] || localKsAttributes["inputType"] || "text";
    input.value = localKsAttributes["value"] || "";
    input.placeholder = localKsAttributes["place-holder"] || localKsAttributes["placeholder"] || localKsAttributes["inputPlaceholder"] || "";

    // 2. Extract Attribute Configurations as Objects
    const localCommonAttrs = getCommonAttributes({ inKsAttributes: localKsAttributes });
    const localInputAttrs = getInputAttributes({ inKsAttributes: localKsAttributes });

    // 3. Combine Attributes
    const localFinalAttrs = { ...localCommonAttrs, ...localInputAttrs };

    // 4. Apply Attributes to DOM Element
    Object.entries(localFinalAttrs).forEach(([attrName, val]) => {
        if (attrName === "class") {
            input.className = val;
        } else {
            input.setAttribute(attrName, val);
        }
    });

    // 5. Attach Events (as-is)
    attachEvents({ inInput: input, inKsAttributes: localKsAttributes });

    return input;
};

export default startFunc;
