export function composeOrder({ inContext, inElements, inOrder }) {
    const localContext = inContext;
    const localElements = inElements;
    const localOrder = inOrder;

    const currentOrder = Array.isArray(localOrder) ? localOrder : ["head", "body", "foot"];

    currentOrder.forEach(item => {
        const el = localElements[item];
        if (el) {
            localContext.appendChild(el);
        }
    });
}
