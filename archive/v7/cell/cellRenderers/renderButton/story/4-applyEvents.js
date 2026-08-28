export const applyEvents = (btn, options) => {
    const createSafeHandler = (handlerName) => {
        return (e) => {
            if (options.preventDefault) e.preventDefault();
            if (options.stopPropagation) e.stopPropagation();
            
            try {
                options[handlerName](e, btn);
            } catch (error) {
                console.error(`Error executing ${handlerName} for button:`, error);
            }
        };
    };

    if (typeof options.onClick === "function") {
        btn.addEventListener("click", createSafeHandler("onClick"));
    }
    
    if (typeof options.onFocus === "function") {
        btn.addEventListener("focus", createSafeHandler("onFocus"));
    }
    
    if (typeof options.onBlur === "function") {
        btn.addEventListener("blur", createSafeHandler("onBlur"));
    }
    
    if (typeof options.onMouseEnter === "function") {
        btn.addEventListener("mouseenter", createSafeHandler("onMouseEnter"));
    }
    
    if (typeof options.onMouseLeave === "function") {
        btn.addEventListener("mouseleave", createSafeHandler("onMouseLeave"));
    }
};
