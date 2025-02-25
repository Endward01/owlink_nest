import { tertiary } from "../services/color.js";

export const createNavbarMenuButton = (parent: HTMLElement, icon: string) => {
  const navbarBtn = document.createElement("button");
  navbarBtn.classList.add(
    "tertiary",
    "aspect-square",
    "p-1",
    "rounded-lg",
    // "hover:bg-[" + tertiary + "]",
    // "hover:bg-red-500",
    "cursor-pointer",
    "shadow-(--box-shadow-main)",
  );
  navbarBtn.innerHTML += icon;
  parent.appendChild(navbarBtn);
};
