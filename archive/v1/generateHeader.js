export function generateHeader(headConfig) {
    if (!headConfig) return null;

    const header = document.createElement("div");
    header.textContent = "header";

    return header;
}
