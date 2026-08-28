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
    }
};

form.setAttribute("ks-theme", "inline-30-70");

inLineDivId.appendChild(form);