import { applyCommonAttributes, applyLabelAttributes } from "../../../applyAttributes.js";

const startFunc = ({ inKsAttributes }) => {
    const localKsAttributes = inKsAttributes;
    const label = document.createElement("label");
    // console.log("localKsAttributes : ", localKsAttributes);

    label.textContent = localKsAttributes?.["text"] || localKsAttributes?.["labelText"] || "";
    applyCommonAttributes(label, localKsAttributes);
    applyLabelAttributes(label, localKsAttributes);

    return label;
};

export default startFunc;