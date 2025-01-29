import { elemColor } from "../services/color.js";
import { createSectionColumn } from "./section-column.js";

export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add("grow", "flex", "gap-2");

  parent.appendChild(section);

  // work in progress
  createSectionColumn(section);
  createSectionColumn(section);
  createSectionColumn(section);
  createSectionColumn(section);
  // work in progress
};
