import { generateHeader } from "./generateHeader.js";
import generateBody from "./generateBody.js";
import generateFooter from "./generateFooter.js";

export const generateElements = ({ inConfig, inTheme }) => {
    const localConfig = inConfig;
    const localTheme = inTheme;

    const headElement = generateHeader(localConfig.head, localTheme.header);
    const bodyElement = generateBody(localConfig.body, localTheme.body);
    const footElement = generateFooter(localConfig.foot, localTheme.footer);

    return {
        head: headElement,
        body: bodyElement,
        foot: footElement
    };
};
