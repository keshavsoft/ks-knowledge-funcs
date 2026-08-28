import insideFunc from "./insideFunc.js";
import loopFunc from "./loop.js";

const startFunc = (inConfig) => {
    if (!inConfig) return null;
    // console.log("inConfig : ", inConfig);

    if (inConfig.isArray && Array.isArray(inConfig?.elements)) {
        const div = document.createElement("div");

        inConfig?.elements.forEach(element => {
            div.appendChild(insideFunc({
                inConfig: element, inTheme: element.theme,
                inIsControl: element.isControl,
                inText: element?.text,
                inControlType: element.controlType,
                inValue: element?.value
            }));
        });

        return div;
    };

    if (inConfig.isContainer) {
        return insideFunc({
            inConfig: inConfig, inTheme: inConfig.theme,
            inIsContainer: inConfig.isContainer,
            inText: inConfig?.text,
            inControlType: inConfig.controlType,
        });
    };
};

export default startFunc;
