import { elemColor } from "../services/color.js";
import { createNavbarBrand } from "./navbar-brand.js";
import { createNavbarMenu } from "./navbar-menu.js";

export const createNavbar = (parent: HTMLElement) => {
  const navbar = document.createElement("nav");
  navbar.classList.add(
    elemColor,
    "flex",
    "justify-between",
    "items-center",
    "p-2",
    "mt-2",
    "rounded-lg",
    "shadow-lg",
  );
  navbar.setAttribute("role", "navigation");
  createNavbarBrand(navbar);
  createNavbarMenu(navbar);
  parent.appendChild(navbar);
};
