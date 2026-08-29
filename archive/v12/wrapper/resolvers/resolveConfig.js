import defaultOptions from "../constants/defaultOptions.json" with { type: "json" };

export const resolveConfig = ({ inContext }) => {
    const localContext = inContext;
    if (localContext.config !== undefined) {
        // Return everything the user provided, merging with defaults
        return { ...defaultOptions, ...localContext.config };
    }

    // If no config object, dynamically check for _ prefixed properties based on defaultOptions
    const fallbackConfig = { ...defaultOptions };
    for (const key in defaultOptions) {
        if (localContext[`_${key}`] !== undefined) {
            fallbackConfig[key] = localContext[`_${key}`];
        }
    }
    
    return fallbackConfig;
};
