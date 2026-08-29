import { renderButton } from "./controls/button/v3/renderButton.js";
import { renderCheckbox } from "./controls/renderCheckbox.js";
import renderInput from "./controls/input/v3/index.js";
import renderLabel from "./controls/label/v3/index.js";

import themes from "../constants/themes.json" with { type: "json" };

const controlRenderers = {
    button: renderButton,
    checkbox: renderCheckbox,
    input: renderInput,
    label: renderLabel
};

const buildDomElement = ({ inSpec, inControlType, inThemeName }) => {
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
        element.classList.add(...themeClasses.split(" "));
    }

    // 5. Centralized Event Listener Binding
    if (localSpec.events && typeof localSpec.events === "object") {
        Object.entries(localSpec.events).forEach(([eventName, listener]) => {
            element.addEventListener(eventName, listener);
        });
    }

    return element;
};

export const renderAttributeControl = (ksAttributes) => {

    console.log("ksAttributes : ", ksAttributes);


    const controlType = ksAttributes["control-type"] || ksAttributes["controlType"];
    const renderer = controlRenderers[controlType];

    if (!renderer) return null;

    // 1. Get pure metadata specification object from v3 control renderer
    const spec = renderer({ inKsAttributes: ksAttributes });

    // Handle legacy controls if any return a DOM element directly
    if (spec instanceof HTMLElement) {
        const themeName = ksAttributes["theme"] || "default";
        const themeClasses = themes[themeName]?.[controlType];

        console.log("themeClasses : ", themeClasses, controlType);

        if (themeClasses) {
            spec.classList.add(...themeClasses.split(" "));
        }
        return spec;
    }

    // 2. Build DOM element & attach events centrally
    const themeName = ksAttributes["theme"] || "default";
    return buildDomElement({
        inSpec: spec,
        inControlType: controlType,
        inThemeName: themeName
    });
};
