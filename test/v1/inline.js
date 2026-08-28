const columns = ["Name", "Mobile"];
const inLineDivId = document.getElementById("inLineDivId");

// Create an array of column configurations (our schema)
const formSchema = columns.map(column => ({
    theme: "split-30-70",
    order: "label,input",
    labelText: column,
    inputType: "text",
    inputPlaceholder: `Enter value for field ${column}...`
}));

// Instantiate the new parent composite
const form = document.createElement("ks-wrapper-base");

// Pass a single configuration object mimicking the JSON structure
form.config = {
    head: {
        isControl: true,
        text: "Item Name",
        theme: "dark-bold",
        controlType: "label"
    },
    body: {
        isControl: true,
        value1: "body",
        theme: "light-sm",
        controlType: "input",
        columns: formSchema
    },
    foot: {
        isControl: true,
        text: "Save",
        controlType: "button",
        theme: "dark",
        class1: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    }
};

form.config1 = {
    head: {
        isControl: true,
        text: "Item Name",
        theme: "",
        controlType: "label"
    },
    body: {
        isControl: true,
        value1: "body",
        theme: "",
        controlType: "input",
        columns: formSchema
    },
    foot: {
        isControl: true,
        text: "Save",
        theme: "",
        controlType: "button",
        theme: "dark",
        class1: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    }
};
// Set the card theme
form.setAttribute("ks-theme", "inline");
// form.setAttribute("ks-theme", "stacked");

inLineDivId.appendChild(form);