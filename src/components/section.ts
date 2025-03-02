import { createLinkElement } from "./linkElement.js";
import { createSectionColumn } from "./section-column.js";
import { createSettings } from "./settings.js";

export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add(
    "grow",
    "flex",
    "absolute",
    "size-full",
    "px-2",
    "my-16",
    "z-1",
    "overflow-scroll",
  );
  parent.appendChild(section);

  for (let i = 0; i <= 4; i++) {
    const column = document.createElement("div");
    column.classList.add("flex-[1]", "flex", "flex-col", "empty:hidden");
    column.setAttribute("column-id", i.toString());

    section.appendChild(column);
    // console.log(i);
  }

  createLinkElement(section);
};
