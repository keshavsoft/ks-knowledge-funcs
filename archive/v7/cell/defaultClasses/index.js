import PREDEFINED_CLASSES from './PREDEFINED_CLASSES.json' with { type: 'json' };
import PREDEFINED_BUTTON_CLASSES from './PREDEFINED_BUTTON_CLASSES.json' with { type: 'json' };
import PREDEFINED_TEXT_CLASSES from './PREDEFINED_TEXT_CLASSES.json' with { type: 'json' };

const applyDefaultStyles = (inInput, inOptions) => {
    // Determine which theme to use, defaulting to 'default'
    const styleKey = (inOptions.theme && PREDEFINED_CLASSES[inOptions.theme]) ? inOptions.theme : "default";

    // Apply the predefined Tailwind CSS classes
    inInput.className = PREDEFINED_CLASSES[styleKey];

    // If a className is passed from outside, we optionally append it
    if (inOptions.className) {
        inInput.className = `${inInput.className} ${inOptions.className}`;
    };
};

export { applyDefaultStyles, PREDEFINED_CLASSES, PREDEFINED_BUTTON_CLASSES, PREDEFINED_TEXT_CLASSES };
