import { createNavbar } from "./components/navbar.js";
import { createSection } from "./components/section.js";
import { createFooter } from "./components/footer.js";
import { changeTitle } from "./services/changePageTitle.js";
import { createAddBookmark } from "./components/addBookmark.js";
import { createSettings } from "./components/settings.js";
import { createBackground } from "./components/background.js";
import { checkLocalStorage } from "./services/localStorageBookmark.js";
import { arrowNavigation } from "./services/arrowNavigation.js";

export const htmlBody: any = document.querySelector("body");
htmlBody.classList.add("background", "h-lvh", "flex");
export const div: HTMLElement = document.createElement("div");
div.classList.add(
  "flex",
  "justify-between",
  "grow",
  "container",
  "mx-auto",
  "overflow-hidden",
  "flex",
  "flex-col",
  "relative",
  "shadow-(--box-shadow-inset-main)",
  "rounded-lg",
  "my-2",
  "relative",
  "z-2",
  "textColor",
);
htmlBody.appendChild(div);

checkLocalStorage();

createNavbar(div);
createSection(div);
createFooter(div);
createBackground(htmlBody);

changeTitle();

arrowNavigation();
