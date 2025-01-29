import { elemColor, textColor } from "../services/color.js";
import { createNavbarMenuButton } from "./navbar-menu-button.js";
export const createFooter = (parent) => {
    const footer = document.createElement("footer");
    footer.classList.add(elemColor, textColor, "p-2", "mb-2", "rounded-lg", "shadow-lg", "flex", "justify-start", "items-center");
    const size = "24px";
    parent.appendChild(footer);
    createNavbarMenuButton(footer, `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke='white' stroke-width="2" stroke-linecap="round" stroke-linejoin"round"/></svg>`);
};
