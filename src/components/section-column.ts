import { elemColor } from "../services/color.js";
import { createSectionColumnList } from "./section-column-list.js";

export const createSectionColumn = (parent: HTMLElement) => {
  const div = document.createElement("div");
  div.classList.add("flex-1/4", "rounded-lg", "shadow-lg", "flex", "flex-col");
  parent.appendChild(div);

  // work in progress
  createSectionColumnList(div);
  createSectionColumnList(div);
  createSectionColumnList(div);
  createSectionColumnList(div);
  // work in progress
};
