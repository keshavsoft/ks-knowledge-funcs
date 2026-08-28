export const applyAttributes = (btn, options) => {
    if (options.buttonId) btn.id = options.buttonId;
    if (options.disabled) btn.disabled = true;
    if (options.buttonTitle) btn.title = options.buttonTitle;
};
