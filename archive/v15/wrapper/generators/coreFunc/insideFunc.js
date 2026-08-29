import { attributeMap } from "./constants/attributeMap.js";
import { getHostClassName, getDefinedOverrides, applyConfigAttributes } from "./utils/attributes.js";

const startFunc = ({ inConfig = {}, inTheme = {}, inClassName = "", inIsControl,
    inIsContainer, inText, inControlType, inValue, inList, inPlaceHolder }) => {

    if (!inConfig) return null;

    const createdCell = document.createElement("ks-cell-base");

    const hostClassName = getHostClassName({ inConfig, inTheme, inClassName });

    const configAttributes = {
        ...inConfig,
        ...getDefinedOverrides({
            inText, inControlType, inValue, inList, inPlaceHolder,
            inTheme
        })
    };

    if (hostClassName) {
        createdCell.className = hostClassName;
    };

    applyConfigAttributes(createdCell, configAttributes, attributeMap);

    return createdCell;
};

export default startFunc;
