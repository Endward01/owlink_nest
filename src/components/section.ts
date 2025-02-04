import { elemColor } from "../services/color.js";
import { createSectionColumn } from "./section-column.js";
import { createSettings } from "./settings.js";

export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add(
    "grow",
    "flex",
    "gap-2",
    "absolute",
    "size-full",
    "px-2",
    "py-16",
    "z-1",
  );

  parent.appendChild(section);

  // work in progress
  // createSectionColumn(section);
  // createSectionColumn(section);
  // createSectionColumn(section);
  // createSectionColumn(section);
  // work in progress
  createSettings(section);
};
