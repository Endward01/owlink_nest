import { elemColor } from "../services/color.js";
import { createSectionColumn } from "./section-column.js";
import { createSettings } from "./settings.js";

export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add(
    "grow",
    "flex",
    // "items-start",
    // "gap-2",
    "absolute",
    "size-full",
    "px-2",
    "py-16",
    "z-1",
  );
  const groupBox = document.createElement("div");
  groupBox.classList.add(
    "groupBox",
    "basis-3/4",
    "flex",
    "items-start",
    "gap-2",
    "flex-wrap",
  );
  section.appendChild(groupBox);

  const itemBox = document.createElement("div");
  itemBox.classList.add("itemBox", "basis-1/4", "flex", "flex-col", "gap-2");
  section.appendChild(itemBox);

  parent.appendChild(section);

  // work in progress
  // createSectionColumn(section);
  // createSectionColumn(section);
  // createSectionColumn(section);
  // createSectionColumn(section);
  // work in progress
  // createSettings(section);
};
