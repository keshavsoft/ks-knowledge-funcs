import coreFunc from "./coreFunc/index.js";

export const generateElements = ({ inConfig }) => {
    const localConfig = inConfig;

    let headElement = null;
    let bodyElement = null;
    let footElement = null;

    if ("head" in localConfig) {
        headElement = coreFunc(localConfig.head);
    };

    if ("body" in localConfig) {
        bodyElement = coreFunc(localConfig.body);
    };

    footElement = coreFunc(localConfig.foot);

    return {
        head: headElement,
        body: bodyElement,
        foot: footElement
    };
};
