export function getContainer(themeObj) {
    const container = document.createElement("form");
    container.className = themeObj.body;
    // Prevent default form submission to let components handle data
    container.addEventListener("submit", (e) => e.preventDefault());
    return container;
}
