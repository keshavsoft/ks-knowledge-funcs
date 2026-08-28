import coreFunc from "./coreFunc/index.js";
import insideFunc from "./coreFunc/insideFunc.js";

export const generateElements = ({ inConfig, inTheme }) => {
    const localConfig = inConfig;
    const localTheme = inTheme;
    let headElement = null;
    let bodyElement = null;
    let footElement = null;

    if ("head" in localConfig) {
        headElement = insideFunc({
            inConfig: localConfig.head, inTheme: localConfig.head.theme,
            inIsControl: localConfig.head.isControl,
            inText: localConfig.head.text,
            inControlType: localConfig.head.controlType
        });
    };

    if ("body" in localConfig) {
        bodyElement = insideFunc({
            inConfig: localConfig.body, inTheme: localConfig.body.theme,
            inIsControl: localConfig.body.isControl,
            inText: localConfig.body?.text,
            inControlType: localConfig.body.controlType,
            inValue: localConfig.body?.value
        });
    };

    footElement = coreFunc(localConfig.foot);

    return {
        head: headElement,
        body: bodyElement,
        foot: footElement
    };
};
