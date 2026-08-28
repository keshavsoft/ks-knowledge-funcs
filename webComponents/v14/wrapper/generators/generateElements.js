import coreFunc from "./coreFunc/index.js";

export const generateElements = ({ inConfig, inTheme }) => {
    const localConfig = inConfig;
    const localTheme = inTheme;

    let headElement = null;
    let bodyElement = null;
    let footElement = null;
    // console.log("inConfig------- : ", inConfig);
    // console.log("localTheme------- : ", localTheme);

    if ("head" in localConfig) {
        headElement = coreFunc({
            inConfig: localConfig.head,
            inClassName: localTheme?.header
        });
    };

    if ("body" in localConfig) {
        bodyElement = coreFunc({
            inConfig: localConfig.body,
            inClassName: localTheme?.body
        });
    };

    footElement = coreFunc(localConfig.foot);

    return {
        head: headElement,
        body: bodyElement,
        foot: footElement
    };
};
