import { renderButton } from "./controls/button/v3/renderButton.js";
import { renderCheckbox } from "./controls/renderCheckbox.js";
import renderInput from "./controls/input/v3/index.js";
import renderLabel from "./controls/label/v3/index.js";

import domElementBuilder from "../../domCreation/v1/index.js";

import themes from "../constants/themes.json" with { type: "json" };

const controlRenderers = {
    button: renderButton,
    checkbox: renderCheckbox,
    input: renderInput,
    label: renderLabel
};

const buildDomElement1 = ({ inSpec, inControlType, inThemeName }) => {
    const localSpec = inSpec;
    if (!localSpec || !localSpec.tagName) return null;

    // 1. Create Element
    const element = document.createElement(localSpec.tagName);

    // 2. Direct Element Properties & Text Content
    if (localSpec.textContent) {
        element.textContent = localSpec.textContent;
    }
    if (localSpec.properties) {
        Object.assign(element, localSpec.properties);
    }

    // 3. Set Attributes & Classes
    if (localSpec.attributes) {
        Object.entries(localSpec.attributes).forEach(([attrName, val]) => {
            if (attrName === "class") {
                element.className = val;
            } else {
                element.setAttribute(attrName, val);
            }
        });
    }

    // 4. Inject Theme Classes from themes.json
    const themeClasses = themes[inThemeName]?.[inControlType];
    if (themeClasses) {
        element.classList.add(...themeClasses.split(/\s+/).filter(Boolean));
    }

    // 5. Centralized Event Listener Binding
    if (localSpec.events && typeof localSpec.events === "object") {
        Object.entries(localSpec.events).forEach(([eventName, listener]) => {
            element.addEventListener(eventName, listener);
        });
    }

    return element;
};

const buildDomElement = ({ inSpec, inControlType, inThemeName }) => {
    const themeClasses = themes[inThemeName]?.[inControlType];

    return domElementBuilder({
        inSpec, inControlType, inThemeName, inClassList: themeClasses
    });
};

export const renderAttributeControl = ({ inKsAttributes } = {}) => {
    const localKsAttributes = inKsAttributes || {};
    const controlType = localKsAttributes["control-type"] || localKsAttributes["controlType"];
    const renderer = controlRenderers[controlType];

    if (!renderer) return null;

    // 1. Get pure metadata specification object from control renderer
    const spec = renderer({ inKsAttributes: localKsAttributes });

    // Handle legacy controls if any return a DOM element directly
    if (spec instanceof HTMLElement) {
        const themeName = localKsAttributes["theme"] || "default";
        const themeClasses = themes[themeName]?.[controlType];

        if (themeClasses) {
            spec.classList.add(...themeClasses.split(/\s+/).filter(Boolean));
        }
        return spec;
    }

    // 2. Build DOM element & attach events centrally
    const themeName = localKsAttributes["theme"] || "default";
    return buildDomElement({
        inSpec: spec,
        inControlType: controlType,
        inThemeName: themeName
    });
};
