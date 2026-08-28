import { PREDEFINED_TEXT_CLASSES } from "./renderInputControl/v7/2-applyDefaultStyles.js";

export function renderDefault(element, val, options = {}) {
    if (typeof val === 'object' && val !== null) {
        val = JSON.stringify(val);
    }
    val = val !== undefined && val !== null ? val : "";
    
    element.innerHTML = '';
    
    const span = document.createElement("span");
    span.textContent = val;
    
    const styleKey = (options.theme && PREDEFINED_TEXT_CLASSES[options.theme]) ? options.theme : "default";
    span.className = PREDEFINED_TEXT_CLASSES[styleKey];
    
    if (options.textClassName) {
        span.className = `${span.className} ${options.textClassName}`;
    }
    
    element.appendChild(span);
}
