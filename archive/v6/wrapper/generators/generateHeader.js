export function generateHeader(headConfig, className = "") {
    if (!headConfig) return null;

    const createdCell = document.createElement("ks-cell-base");
    createdCell.className = "---";
    createdCell.setAttribute("ks-control-type", "label");
    createdCell.setAttribute("ks-text", "tttttt");
    createdCell.setAttribute("ks-value", "vvvvvv");
    createdCell.setAttribute("ks-list", "lllllll");
    createdCell.setAttribute("ks-place-holder", "ppppppp");

    // // Pass the configuration data to the cell component's setter
    // createdCell.inputs = headConfig;

    return createdCell;
}
