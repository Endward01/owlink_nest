import { bgColor, elemColor } from "../services/color.js";

export const createNavbarMenuButton = (parent: HTMLElement, icon: string) => {
  const navbarBtn = document.createElement("button");
  navbarBtn.classList.add(
    "aspect-square",
    "p-1",
    "rounded-lg",
    // "hover:bg-[" + bgColor + "]",
    "hover:bg-red-500",
    "cursor-pointer",
  );
  navbarBtn.innerHTML += icon;
  parent.appendChild(navbarBtn);
};
