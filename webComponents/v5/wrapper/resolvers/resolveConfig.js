import defaultOptions from "../constants/defaultOptions.json" with { type: "json" };

export const resolveConfig = ({ inContext }) => {
    const localContext = inContext;
    const userConfig = localContext.config || {};
    const isConfigProvided = localContext.config !== undefined;

    return isConfigProvided ? {
        head: userConfig.head,
        body: userConfig.body,
        foot: userConfig.foot,
        order: userConfig.order || defaultOptions.order
    } : {
        head: localContext._head !== undefined ? localContext._head : defaultOptions.head,
        body: localContext._body !== undefined ? localContext._body : defaultOptions.body,
        foot: localContext._foot !== undefined ? localContext._foot : defaultOptions.foot,
        order: localContext._order !== undefined ? localContext._order : defaultOptions.order
    };
};
