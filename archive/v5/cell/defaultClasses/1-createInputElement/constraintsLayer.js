export const applyConstraints = (input, inOptions) => {
    if (inOptions.min !== undefined) input.min = inOptions.min;
    if (inOptions.max !== undefined) input.max = inOptions.max;
    if (inOptions.step !== undefined) input.step = inOptions.step;
    
    if (inOptions.maxLength !== undefined) input.maxLength = inOptions.maxLength;
    if (inOptions.minLength !== undefined) input.minLength = inOptions.minLength;
    if (inOptions.pattern !== undefined) input.pattern = inOptions.pattern;
    if (inOptions.size !== undefined) input.size = inOptions.size;
};
