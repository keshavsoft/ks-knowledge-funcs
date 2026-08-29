export const applyThemeWrapper = ({ inContext, inTheme }) => {
    const localContext = inContext;
    const localTheme = inTheme;

    if (localTheme && localTheme.wrapper) {
        localContext.className = localTheme.wrapper;
    }
};
