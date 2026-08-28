import { renderArrayView } from "../cellRenderers/renderArrayView.js";
import { renderDefault } from "../cellRenderers/renderDefault.js";
import { renderInputControl } from "../cellRenderers/renderInputControl/index.js";
import { renderButton } from "../cellRenderers/renderButton/index.js";

export const renderControl = (element, val, options) => {
    let renderedControl = false;

    if (options?.showInput) {
        renderInputControl(element, options);
        renderedControl = true;
    }

    // Add a button next to the input (or standalone) if requested
    if (options?.showButton) {
        renderButton(element, options);
        renderedControl = true;
    };

    if (renderedControl) {
        return;
    }

    // Check for Array Data
    if (Array.isArray(val)) {
        renderArrayView(element, val);
        return;
    }

    // Fallback to default text rendering
    renderDefault(element, val, options);
};
