const startFunc = (headConfig, className = "") => {
    if (!headConfig) return null;

    const header = document.createElement("div");
    header.textContent = "footer";
    if (className) {
        header.className = className;
    }

    return header;
};

export default startFunc;
