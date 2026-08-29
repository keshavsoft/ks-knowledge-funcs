import domElementBuilder from "../../../domCreation/v1/index.js";

// import domElementBuilder from "../../../../domCreation/v1/index.js";

import { attributeMap } from "./constants/attributeMap.js";
import { getHostClassName, getDefinedOverrides, hasValue } from "./utils/attributes.js";

const startFunc = ({ inConfig = {}, inTheme = {}, inClassName = "", inIsControl,
    inIsContainer, inText, inControlType, inValue, inList, inPlaceHolder }) => {

    if (!inConfig) return null;

    const hostClassName = getHostClassName({ inConfig, inTheme, inClassName });

    const configAttributes = {
        ...inConfig,
        ...getDefinedOverrides({
            inText, inControlType, inValue, inList, inPlaceHolder,
            inTheme
        })
    };

    // Prepare attributes object with ks- prefix
    const cellAttributes = {};
    for (const configKey in attributeMap) {
        const val = configAttributes[configKey];
        if (hasValue(val)) {
            const attrName = `ks-${attributeMap[configKey]}`;
            cellAttributes[attrName] = val;
        }
    }

    // Build ks-cell-base element using central domElementBuilder
    const createdCell = domElementBuilder({
        inSpec: {
            tagName: "ks-cell-base",
            attributes: cellAttributes
        },
        inClassList: hostClassName
    });

    if (createdCell) {
        createdCell.config = configAttributes;
    };

    return createdCell;
};

export default startFunc;
