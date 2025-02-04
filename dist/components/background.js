import { createBackgroundImage } from "./background-image.js";
export const createBackground = (parent) => {
    const div = document.createElement("div");
    div.classList.add("absolute", "top-0", "left-0", "w-full", "h-full", "opacity-80", "z-1");
    createBackgroundImage(div);
    parent.appendChild(div);
};
