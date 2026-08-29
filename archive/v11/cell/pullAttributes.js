const expectedAttributes = {
    "aria-described-by": "",
    "aria-label": "",
    "autocomplete": "",
    "autofocus": "",
    "checked": "",
    "class": "",
    "class-name": "",
    "control-type": "",
    "data-key": "",
    "dir": "",
    "disabled": "",
    "for": "",
    "form": "",
    "form-action": "",
    "form-enctype": "",
    "form-method": "",
    "form-no-validate": "",
    "form-target": "",
    "id": "",
    "text": "",
    "value": "",
    "list": "",
    "max": "",
    "max-length": "",
    "min": "",
    "min-length": "",
    "multiple": "",
    "name": "",
    "pattern": "",
    "place-holder": "",
    "read-only": "",
    "readonly": "",
    "required": "",
    "role": "",
    "size": "",
    "spellcheck": "",
    "step": "",
    "tab-index": "",
    "title": "",
    "type": ""
};

const startFunc = (instance) => {
    const ksAttributes = {};

    for (const key in expectedAttributes) {
        const attrName = `ks-${key}`;
        if (instance.hasAttribute(attrName)) {
            ksAttributes[key] = instance.getAttribute(attrName);
        }
    };

    return ksAttributes;
};

export default startFunc;
