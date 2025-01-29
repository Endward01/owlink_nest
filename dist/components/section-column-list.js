import { elemColor } from "../services/color.js";
export const createSectionColumnList = (parent) => {
    const div = document.createElement("div");
    div.classList.add("flex-1/4", "rounded-lg", "shadow-lg", elemColor, "mt-2", "last:mb-2");
    parent.appendChild(div);
};
