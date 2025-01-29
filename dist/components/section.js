import { createSectionColumn } from "./section-column.js";
export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow", "flex", "gap-2");
    parent.appendChild(section);
    createSectionColumn(section);
    createSectionColumn(section);
    createSectionColumn(section);
    createSectionColumn(section);
};
