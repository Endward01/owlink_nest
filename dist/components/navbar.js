import { createNavbarBrand } from "./navbar-brand.js";
import { createNavbarMenu } from "./navbar-menu.js";
export const createNavbar = (parent) => {
    const navbar = document.createElement("nav");
    navbar.classList.add("bg-(--bg-trans-25)", "backdrop-blur-(--blur-mica)", "flex", "justify-between", "items-center", "p-2", "m-2", "rounded-lg", "shadow-(--box-shadow-main)", "z-2");
    navbar.setAttribute("role", "navigation");
    createNavbarBrand(navbar);
    createNavbarMenu(navbar);
    parent.appendChild(navbar);
};
