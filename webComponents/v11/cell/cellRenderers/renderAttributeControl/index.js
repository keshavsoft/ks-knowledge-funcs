import { renderButton } from "./controls/button/renderButton.js";
import { renderCheckbox } from "./controls/renderCheckbox.js";
import { renderInput } from "./controls/renderInput.js";
import { renderLabel } from "./controls/renderLabel.js";

const controlRenderers = {
    button: renderButton,
    checkbox: renderCheckbox,
    input: renderInput,
    label: renderLabel
};

export const renderAttributeControl = (element, ksAttributes) => {
    const controlType = ksAttributes["control-type"];
    const renderer = controlRenderers[controlType];

    if (!renderer) return;

    renderer(element, ksAttributes);
};
