const attributeMap = {
    ariaDescribedBy: "aria-described-by",
    ariaLabel: "aria-label",
    autocomplete: "autocomplete",
    autofocus: "autofocus",
    checked: "checked",
    class: "class",
    className: "class",
    controlClassName: "class",
    controlType: "control-type",
    dataKey: "data-key",
    dir: "dir",
    disabled: "disabled",
    for: "for",
    form: "form",
    formAction: "form-action",
    formEnctype: "form-enctype",
    formMethod: "form-method",
    formNoValidate: "form-no-validate",
    formTarget: "form-target",
    htmlFor: "for",
    id: "id",
    list: "list",
    max: "max",
    maxLength: "max-length",
    min: "min",
    minLength: "min-length",
    multiple: "multiple",
    name: "name",
    pattern: "pattern",
    placeHolder: "place-holder",
    placeholder: "place-holder",
    readOnly: "read-only",
    readonly: "readonly",
    required: "required",
    role: "role",
    size: "size",
    spellcheck: "spellcheck",
    step: "step",
    tabIndex: "tab-index",
    tailwindClass: "class",
    text: "text",
    title: "title",
    type: "type",
    value: "value",
    buttonClassName: "class",
    buttonId: "id",
    buttonText: "text",
    buttonTitle: "title",
    inputClassName: "class",
    inputId: "id",
    inputPlaceholder: "place-holder",
    inputType: "type",
    inputValue: "value",
    labelClassName: "class",
    labelId: "id",
    labelText: "text"
};

const hasValue = (value) => value !== undefined && value !== null;

const setCellAttribute = (element, attributeName, value) => {
    if (!hasValue(value)) return;

    element.setAttribute(`ks-${attributeName}`, value);
};

const getDefinedOverrides = ({ inText, inControlType, inValue, inList, inPlaceHolder }) => {
    const overrides = {};

    if (hasValue(inText)) overrides.text = inText;
    if (hasValue(inControlType)) overrides.controlType = inControlType;
    if (hasValue(inValue)) overrides.value = inValue;
    if (hasValue(inList)) overrides.list = inList;
    if (hasValue(inPlaceHolder)) overrides.placeHolder = inPlaceHolder;

    return overrides;
};

const applyConfigAttributes = (element, config) => {
    for (const configKey in attributeMap) {
        setCellAttribute(element, attributeMap[configKey], config[configKey]);
    };
};

const getHostClassName = ({ inConfig, inTheme, inClassName }) => {
    if (hasValue(inClassName) && inClassName !== "") return inClassName;
    if (hasValue(inConfig.hostClassName)) return inConfig.hostClassName;
    if (hasValue(inConfig.cellClassName)) return inConfig.cellClassName;
    if (typeof inTheme === "string") return inTheme;

    return "";
};

const startFunc = ({ inConfig = {}, inTheme = {}, inClassName = "", inIsControl,
    inIsContainer, inText, inControlType, inValue, inList, inPlaceHolder }) => {

    if (!inConfig) return null;

    if (inIsControl || inConfig.isControl) {
        const createdCell = document.createElement("ks-cell-base");
        const hostClassName = getHostClassName({ inConfig, inTheme, inClassName });
        const configAttributes = {
            ...inConfig,
            ...getDefinedOverrides({ inText, inControlType, inValue, inList, inPlaceHolder })
        };

        if (hostClassName) {
            createdCell.className = hostClassName;
        }

        applyConfigAttributes(createdCell, configAttributes);

        return createdCell;
    };
};

export default startFunc;
