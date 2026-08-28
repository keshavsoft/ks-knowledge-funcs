export const applyAttributes = (element, options) => {
    // Clear previous content
    element.innerHTML = '';

    if (options.dataKey || options.name) {
        const nameToSet = options.name || options.dataKey;
        element.setAttribute("name", nameToSet);
        element.name = nameToSet;
    }

    if (options.id) {
        element.setAttribute("id", options.id);
        element.id = options.id;
    }
};
