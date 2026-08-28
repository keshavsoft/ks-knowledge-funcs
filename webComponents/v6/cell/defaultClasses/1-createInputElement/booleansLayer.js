export const applyBooleans = (input, inOptions) => {
    if (inOptions.required) input.required = true;
    if (inOptions.disabled) input.disabled = true;
    if (inOptions.readOnly) input.readOnly = true;
    
    if (inOptions.checked) input.checked = true;
    if (inOptions.multiple) input.multiple = true;
    if (inOptions.autofocus) input.autofocus = true;
    if (inOptions.spellcheck !== undefined) input.spellcheck = inOptions.spellcheck;
    if (inOptions.formNoValidate) input.formNoValidate = true;
};
