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
        showLabel: "User Registration",
        theme: ""
    },
    body: {
        columns: formSchema,
        theme: ""
    },
    foot: {
        buttons: [
            { text: "Cancel", theme: "cancel", type: "button" },
            { text: "Save Changes", theme: "save", type: "submit" }
        ],
        theme: ""
    }
};

// Set the card theme
form.setAttribute("ks-theme", "inline");

inLineDivId.appendChild(form);