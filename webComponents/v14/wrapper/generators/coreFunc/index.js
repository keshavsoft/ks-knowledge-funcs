import insideFunc from "./insideFunc.js";
import themes from "./themes.json" with { type: "json" };

const startFunc = ({ inConfig, inClassName }) => {
    if (!inConfig) return null;
    // console.log("inConfig : ", inConfig);
    if (inConfig.isArray && Array.isArray(inConfig?.elements)) {
        const mainDiv = document.createElement("div");

        const div = document.createElement("div");
        div.className = inConfig.theme ? themes[inConfig.theme] : "flex gap-2";

        inConfig?.elements.forEach(element => {
            div.appendChild(insideFunc({
                inConfig: element, inTheme: element.theme,
                inIsControl: element.isControl,
                inText: element?.text,
                inControlType: element.controlType,
                inValue: element?.value
            }));
        });

        mainDiv.appendChild(div);

        return mainDiv;
    };

    if (inConfig.isControl) {
        return insideFunc({
            inConfig: inConfig, inTheme: inConfig.theme,
            inIsContainer: inConfig.isContainer,
            inText: inConfig?.text, inClassName,
            inControlType: inConfig.controlType,
        });
    };
};

export default startFunc;
