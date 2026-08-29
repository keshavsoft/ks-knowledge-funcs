export const attachEvents = ({ inInput, inKsAttributes }) => {
    const localInput = inInput;
    const localKsAttributes = inKsAttributes;

    // Check if enter-as-tab is enabled (supports "enter-as-tab" or "enterAsTab", boolean or string "true")
    const rawVal = localKsAttributes?.["enter-as-tab"] ?? localKsAttributes?.enterAsTab;
    const isEnterAsTab = rawVal === "true" || rawVal === true;

    if (isEnterAsTab) {
        localInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                const container = document;
                const inputs = Array.from(container.querySelectorAll("input"));
                const currentIndex = inputs.indexOf(localInput);

                if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
                    inputs[currentIndex + 1].focus();
                }
            }
        });
    }
};
