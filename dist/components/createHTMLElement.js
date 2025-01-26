export const createHTMLElement = (label, className) => {
    const element = document.createElement(label);
    element.classList.add(className);
    return element;
};
