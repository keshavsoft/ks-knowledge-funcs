import coreFunc from "./coreFunc.js";

export const generateElements = ({ inConfig, inTheme }) => {
    const localConfig = inConfig;
    const localTheme = inTheme;
    console.log("localConfig : ", localConfig);

    const headElement = coreFunc({
        inConfig: localConfig.head, inTheme: localTheme.header,
        inIsControl: localConfig.head.isControl,
        inText: localConfig.head.text,
        inControlType: localConfig.head.controlType
    });

    const bodyElement = coreFunc({
        inConfig: localConfig.body, inTheme: localTheme.body,
        inIsControl: localConfig.body.isControl,
        inText: localConfig.body?.text,
        inControlType: localConfig.body.controlType,
        inValue: localConfig.body?.value
    });

    const footElement = coreFunc({
        inConfig: localConfig.foot, inTheme: localTheme.footer,
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
