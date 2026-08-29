import renderButton from "./controls/button.js";
import renderCheckbox from "./controls/checkbox.js";
import renderInput from "./controls/input.js";
import renderLabel from "./controls/label.js";

import domElementBuilder from "../domCreation/v1/index.js";
import themes from "./themes.json" with { type: "json" };

const controlRenderers = {
    button: renderButton,
    checkbox: renderCheckbox,
    input: renderInput,
    label: renderLabel
};

export const resolveSpec = ({ inConfig }) => {
    const localConfig = inConfig || {};
    console.log("localConfig : ", localConfig);

    // 1. Composite Wrapper Node (isWrapper: true with elements array)
    if (localConfig.isWrapper && Array.isArray(localConfig?.elements)) {
        const sectionChildren = localConfig.elements.map(childConfig => {
            const subWrapper = domElementBuilder({
                inSpec: {
                    tagName: "ks-wrapper-base",
                    attributes: {
                        "ks-theme": childConfig.theme || localConfig.theme || "inline-30-70"
                    }
                }
            });
            if (subWrapper) {
                subWrapper.config = childConfig;
            }
            return subWrapper;
        }).filter(Boolean);

        return domElementBuilder({
            inSpec: {
                tagName: "div",
                children: sectionChildren
            },
            inClassList: "flex flex-col w-full gap-2"
        });
    }

    // 2. Row Node (isArray: true with elements array)
    if (localConfig.isArray && Array.isArray(localConfig?.elements)) {
        const rowChildren = localConfig.elements.map(childConfig => {
            return resolveSpec({ inConfig: childConfig });
        }).filter(Boolean);

        const themeClasses = localConfig.theme ? themes[localConfig.theme] : "flex gap-2";

        return domElementBuilder({
            inSpec: {
                tagName: "div",
                children: rowChildren
            },
            inClassList: typeof themeClasses === "string" ? themeClasses : "flex gap-2"
        });
    };

    if (localConfig.is3Part1) {
        // 3. Root Form Layout Object (head, body, foot, etc.)
        // const sectionKeys = Object.keys(localConfig).filter(k => ["head", "body", "foot", "foot1", "foot2"].includes(k));
        const sectionKeys = Object.keys(localConfig);

        const themeName = sectionKeys["theme"] || "default";
        console.log("sectionKeys : ", themeName, sectionKeys);

        if (sectionKeys.length > 0) {
            const sectionChildren = sectionKeys.map(key => {
                return resolveSpec({ inConfig: localConfig[key] });
            }).filter(Boolean);

            return domElementBuilder({
                inSpec: {
                    tagName: "div",
                    children: sectionChildren
                },
                inThemeName: themeName,
                inClassList: "flex flex-col w-full gap-2"
            });
        };
    };

    if (localConfig.is3Part) {
        // 3. Root Form Layout Object (head, body, foot, etc.)
        // const sectionKeys = Object.keys(localConfig).filter(k => ["head", "body", "foot", "foot1", "foot2"].includes(k));
        const sectionKeys = Object.keys(localConfig);

        const themeName = sectionKeys["theme"] || "default";
        console.log("sectionKeys : ", themeName, sectionKeys);

        if (sectionKeys.length > 0) {
            const sectionChildren = sectionKeys.map(key => {
                return resolveSpec({ inConfig: localConfig[key] });
            }).filter(Boolean);

            return domElementBuilder({
                inSpec: {
                    tagName: "div",
                    children: sectionChildren
                },
                inThemeName: themeName,
                inClassList: "flex flex-col w-full gap-2"
            });
        };
    };
    // 4. Control Node (Leaf)
    const controlType = localConfig["control-type"] || localConfig["controlType"];
    if ((localConfig.isControl || controlType) && controlRenderers[controlType || "input"]) {
        const resolvedType = controlType || "input";
        const renderer = controlRenderers[resolvedType];
        const spec = renderer({ inKsAttributes: localConfig });

        const themeName = localConfig["theme"] || "default";
        const themeClasses = themes[themeName]?.[resolvedType];

        return domElementBuilder({
            inSpec: spec,
            inControlType: resolvedType,
            inThemeName: themeName,
            inClassList: themeClasses
        });
    }

    return null;
};

export default resolveSpec;
