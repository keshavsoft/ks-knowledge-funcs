export const applyStandardAttributes = (input, inOptions) => {
    if (inOptions.placeholder !== undefined) input.placeholder = inOptions.placeholder;
    if (inOptions.value !== undefined) input.value = inOptions.value;
    if (inOptions.name !== undefined) input.name = inOptions.name;
    if (inOptions.id !== undefined) input.id = inOptions.id;
    
    if (inOptions.tabIndex !== undefined) input.tabIndex = inOptions.tabIndex;
    if (inOptions.title !== undefined) input.title = inOptions.title;
    if (inOptions.autocomplete !== undefined) input.autocomplete = inOptions.autocomplete;
    if (inOptions.dir !== undefined) input.dir = inOptions.dir;
};
