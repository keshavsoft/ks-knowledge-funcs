// console.log("finalConfig :-------- ");

const inLineDivId = document.getElementById("inLineDivId");

const form = document.createElement("ks-wrapper-base");

form.config = {
    isControl: true,
    text: "column Name",
    theme: "default-better-focus",
    controlType: "button"
};

form.config1 = {
    is3Part: true,
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

form.setAttribute("ks-theme", "inline");

inLineDivId.appendChild(form);