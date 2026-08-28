export function composeOrder(wrapper, elements, order) {
    const currentOrder = Array.isArray(order) ? order : ["head", "body", "foot"];

    currentOrder.forEach(item => {
        const el = elements[item];
        if (el) {
            wrapper.appendChild(el);
        }
    });
}
