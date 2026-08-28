export function generateHeader(headConfig, className = "") {
    if (!headConfig) return null;

    const header = document.createElement("div");
    header.textContent = "header";
    if (className) {
        header.className = className;
    }

    return header;
}
