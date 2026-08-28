import { applyType } from "./1-createInputElement/typeLayer.js";
import { applyStandardAttributes } from "./1-createInputElement/standardAttributesLayer.js";
import { applyConstraints } from "./1-createInputElement/constraintsLayer.js";
import { applyBooleans } from "./1-createInputElement/booleansLayer.js";
import { applyEvents } from "./1-createInputElement/eventsLayer.js";
import { createDatalist } from "./1-createInputElement/datalistControl.js";
import { createSelect } from "./1-createInputElement/selectControl.js";


const createInputElement = (inOptions) => {
    const localOptions = inOptions;
    let createdElement;

    if (localOptions.controlType === "datalist") {
        createdElement = createDatalist(localOptions);
    } else if (localOptions.controlType === "select") {
        createdElement = createSelect(localOptions);
    } else {
        createdElement = document.createElement("input");
        applyType(createdElement, localOptions);
    };

    applyStandardAttributes(createdElement, localOptions);
    applyConstraints(createdElement, localOptions);
    applyBooleans(createdElement, localOptions);
    applyEvents(createdElement, localOptions);

    return createdElement;
};

export { createInputElement };
