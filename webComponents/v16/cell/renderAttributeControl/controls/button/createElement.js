export const createElement = (ksAttributes) => {
    const button = document.createElement("button");

    if (ksAttributes["type"]) {
        button.type = ksAttributes["type"];
    };

    button.textContent = ksAttributes["text"] || "";
    
    return button;
};
