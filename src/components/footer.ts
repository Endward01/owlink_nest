import { elemColor, textColor } from "../services/color.js";

export const createFooter = (parent: HTMLElement) => {
  const footer = document.createElement("footer");
  footer.classList.add(
    elemColor,
    textColor,
    "p-2",
    "mb-2",
    "rounded-lg",
    "shadow-lg",
  );
  parent.appendChild(footer);
};
