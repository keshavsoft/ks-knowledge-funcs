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

const LABEL_ATTRIBUTES = {
    "for": "for"
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

const getLabelAttributes = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes || {};
    const localResult = {};

    for (const [ksKey, attrName] of Object.entries(LABEL_ATTRIBUTES)) {
        const val = localKsAttributes[ksKey] ?? localKsAttributes[attrName] ?? localKsAttributes["htmlFor"];
        if (val !== undefined && val !== "") {
            localResult[attrName] = val;
        }
    }

    return localResult;
};

const startFunc = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes;
    const label = document.createElement("label");

    // 1. Text Content
    label.textContent = localKsAttributes?.["text"] || localKsAttributes?.["labelText"] || localKsAttributes?.text || localKsAttributes?.labelText || "";

    // 2. Extract Attribute Configurations as Objects
    const localCommonAttrs = getCommonAttributes({ inKsAttributes: localKsAttributes });
    const localLabelAttrs = getLabelAttributes({ inKsAttributes: localKsAttributes });

    // 3. Combine Attributes
    const localFinalAttrs = { ...localCommonAttrs, ...localLabelAttrs };

    // 4. Apply Attributes to DOM Element
    Object.entries(localFinalAttrs).forEach(([attrName, val]) => {
        if (attrName === "class") {
            label.className = val;
        } else {
            label.setAttribute(attrName, val);
        }
    });

    return label;
};

export default startFunc;