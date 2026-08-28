export const createButton = (options) => {
    const btn = document.createElement("button");
    btn.textContent = options.buttonText || "Submit";
    return btn;
};
