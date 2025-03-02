import { createLinkElement } from "./linkElement.js";
export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow", "flex", "absolute", "size-full", "px-2", "my-16", "z-1", "overflow-scroll");
    parent.appendChild(section);
    for (let i = 0; i <= 4; i++) {
        const column = document.createElement("div");
        column.classList.add("flex-[1]", "flex", "flex-col", "empty:hidden");
        column.setAttribute("column-id", i.toString());
        section.appendChild(column);
    }
    createLinkElement(section);
};
