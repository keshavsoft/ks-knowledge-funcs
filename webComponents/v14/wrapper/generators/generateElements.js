import coreFunc from "./coreFunc/index.js";

export const generateElements = ({ inConfig, inTheme }) => {
    const localConfig = inConfig;
    const localTheme = inTheme;
    // console.log("localTheme : ", localConfig, localTheme);
    let headElement = null;
    let bodyElement = null;
    let footElement = null;

    if ("head" in localConfig) {
        headElement = coreFunc({
            inConfig: localConfig.head, inTheme: localConfig.head.theme,
            inIsControl: localConfig.head.isControl,
            inText: localConfig.head.text,
            inControlType: localConfig.head.controlType
        });
    };

    if ("body" in localConfig) {
        bodyElement = coreFunc({
            inConfig: localConfig.body, inTheme: localConfig.body.theme,
            inIsControl: localConfig.body.isControl,
            inText: localConfig.body?.text,
            inControlType: localConfig.body.controlType,
            inValue: localConfig.body?.value
        });
    };

    footElement = coreFunc({
        inConfig: localConfig.foot, inTheme: localConfig.foot.theme,
        inIsControl: localConfig.foot.isControl,
        inText: localConfig.foot?.text,
        inControlType: localConfig.foot.controlType,
        inValue: localConfig.foot?.value
    });

    return {
        head: headElement,
        body: bodyElement,
        foot: footElement
    };
};
