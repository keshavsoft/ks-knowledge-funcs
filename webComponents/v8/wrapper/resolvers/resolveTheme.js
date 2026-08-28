import themes from "../constants/themes.json" with { type: "json" };

export const resolveTheme = ({ inContext }) => {
    const localContext = inContext;
    const themeToUse = localContext.getAttribute("ks-theme") || "stacked";
    return themes[themeToUse] || themes["stacked"];
};
