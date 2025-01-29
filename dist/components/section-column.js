import { createSectionColumnList } from "./section-column-list.js";
export const createSectionColumn = (parent) => {
    const div = document.createElement("div");
    div.classList.add("flex-1/4", "rounded-lg", "shadow-lg", "flex", "flex-col");
    parent.appendChild(div);
    createSectionColumnList(div);
    createSectionColumnList(div);
    createSectionColumnList(div);
    createSectionColumnList(div);
};
