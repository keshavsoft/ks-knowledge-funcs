import coreFunc from "./index.js";

const startFunc = (inArray) => {
    const containerDiv = document.createElement("ks-wrapper-base");

    inArray.forEach(element => {
        coreFunc(element);
    });
};

export default startFunc;
