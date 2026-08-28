import { renderButton } from "./renderButton.js";
import { renderCheckbox } from "./renderCheckbox.js";
import { renderInput } from "./renderInput.js";
import { renderLabel } from "./renderLabel.js";

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
