export const applyEvents = (input, inOptions) => {
    if (inOptions.controlType === "button" && inOptions.onClick !== undefined) {
        input.addEventListener("click", inOptions.onClick);
    }
    if (inOptions.onChange !== undefined) {
        input.addEventListener("change", inOptions.onChange);
    }
    if (inOptions.onInput !== undefined) {
        input.addEventListener("input", inOptions.onInput);
    }
};
