import { createSettings } from "./settings.js";
export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow", "flex", "gap-2", "absolute", "size-full", "px-2", "py-16", "z-1");
    parent.appendChild(section);
    createSettings(section);
};
