import { renderButton } from "./controls/button/renderButton.js";
import { renderCheckbox } from "./controls/renderCheckbox.js";
import { renderInput } from "./controls/renderInput.js";
import { renderLabel } from "./controls/renderLabel.js";

import themes from "../constants/themes.json" with { type: "json" };

const controlRenderers = {
    button: renderButton,
    checkbox: renderCheckbox,
    input: renderInput,
    label: renderLabel
};

export const renderAttributeControl = (ksAttributes) => {
    const controlType = ksAttributes["control-type"];
    const renderer = controlRenderers[controlType];

    if (!renderer) return null;

    // 1. Get the raw element from the renderer
    const element = renderer(ksAttributes);
    // console.log("ksAttributes : ", ksAttributes);

    // 2. Determine the theme (defaults to "default")
    const themeName = ksAttributes["theme"] || "default";

    // 3. Look up the classes in themes.json
    const themeClasses = themes[themeName]?.[controlType];
    console.log("themeClasses------- : ", themeName, controlType, themeClasses);

    // 4. Inject the classes
    if (themeClasses) {
        element.classList.add(...themeClasses.split(" "));
    };

    return element;
};
