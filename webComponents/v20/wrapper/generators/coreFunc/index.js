import domElementBuilder from "../../../domCreation/v1/index.js";
import insideFunc from "./insideFunc.js";
import themes from "./themes.json" with { type: "json" };

const startFunc = ({ inConfig, inClassName }) => {
    if (!inConfig) return null;
    // console.log("inConfig : ", inConfig);
    if (inConfig.isArray && Array.isArray(inConfig?.elements)) {
        const mainDiv = domElementBuilder({ inSpec: { tagName: "div" } });

        const div = domElementBuilder({
            inSpec: { tagName: "div" },
            inClassList: inConfig.theme ? themes[inConfig.theme] : "flex gap-2"
        });

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

    if (inConfig.isWrapper && Array.isArray(inConfig?.elements)) {
        const mainDiv = domElementBuilder({
            inSpec: { tagName: "div" },
            inClassList: "flex flex-col w-full gap-2"
        });

        inConfig?.elements.forEach(element => {
            const div = domElementBuilder({
                inSpec: {
                    tagName: "ks-wrapper-base",
                    attributes: {
                        "ks-theme": "inline-30-70"
                    }
                }
            });

            if (div) {
                div.config = element;
            }

            mainDiv.appendChild(div);
        });

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
