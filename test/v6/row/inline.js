console.log("finalConfig :-------- ");

const inLineDivId = document.getElementById("inLineDivId");

const form = document.createElement("ks-wrapper-base");

form.config = {
    head: {
        isControl: true,
        text: "column Name",
        theme: "default-better-focus",
        controlType: "label"
    },
    body: {
        isControl: true,
        theme: "default-better-focus",
        controlType: "input",
        "ks-enter-as-tab": true
    }
};

form.setAttribute("ks-theme", "stacked");

inLineDivId.appendChild(form);