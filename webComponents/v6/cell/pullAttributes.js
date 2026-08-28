const expectedAttributes = {
    "control-type": "",
    "text": "",
    "value": "",
    "list": "",
    "place-holder": ""
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