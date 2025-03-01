import { createNavbar } from "./components/navbar.js";
import { createSection } from "./components/section.js";
import { createFooter } from "./components/footer.js";
import { changeTitle } from "./services/changePageTitle.js";
import { createBackground } from "./components/background.js";
import { checkLocalStorage } from "./services/localStorageBookmark.js";
export const htmlBody = document.querySelector("body");
htmlBody.classList.add("primary", "h-lvh", "flex");
export const div = document.createElement("div");
div.classList.add("flex", "justify-between", "grow", "container", "mx-auto", "overflow-hidden", "flex", "flex-col", "relative", "shadow-(--box-shadow-inset-main)", "rounded-lg", "my-2", "relative", "z-2", "textColor");
htmlBody.appendChild(div);
createNavbar(div);
createSection(div);
createFooter(div);
createBackground(htmlBody);
changeTitle();
checkLocalStorage();
