export const hasValue = (value) => value !== undefined && value !== null;

export const isAttributeTrue = (value) => {
    if (value === true || value === "") return true;
    if (value === false) return false;

    return String(value).toLowerCase() === "true";
};
