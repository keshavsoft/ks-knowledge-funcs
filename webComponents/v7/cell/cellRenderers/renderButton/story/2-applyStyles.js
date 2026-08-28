import { PREDEFINED_BUTTON_CLASSES } from "../../renderInputControl/v7/2-applyDefaultStyles.js";

export const applyStyles = (btn, options) => {
    // Determine button theme, defaulting to 'default'
    const styleKey = (options.theme && PREDEFINED_BUTTON_CLASSES[options.theme]) ? options.theme : "default";
    btn.className = PREDEFINED_BUTTON_CLASSES[styleKey];

    // Allow outside overriding
    if (options.buttonClassName) {
        btn.className = `${btn.className} ${options.buttonClassName}`;
    }
};
