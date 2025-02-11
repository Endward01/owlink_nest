import { createNavbar } from "./components/navbar.js";
import { createSection } from "./components/section.js";
import { createFooter } from "./components/footer.js";
import { changeTitle } from "./services/changePageTitle.js";
import { bgColor } from "./services/color.js";
import { createAddBookmark } from "./components/addBookmark.js";
import { createSettings } from "./components/settings.js";
import { createBackground } from "./components/background.js";
import { getBookmarksFromBrowser } from "./services/getBookmarksFromBrowser.js";

export const htmlBody: any = document.querySelector("body");
htmlBody.classList.add("h-lvh", "flex", bgColor);
export const div: HTMLElement = document.createElement("div");
div.classList.add(
  "flex",
  "justify-between",
  "grow",
  "container",
  "mx-auto",
  // bgColor,
  "overflow-hidden",
  "flex",
  "flex-col",
  "relative",
  "shadow-(--box-shadow-inset-main)",
  "rounded-lg",
  // "px-2",
  "my-2",
  "relative",
  "z-2",
  // "backdrop-grayscale-25",
);
htmlBody.appendChild(div);

createNavbar(div);
createSection(div);
createFooter(div);
createBackground(htmlBody);

changeTitle();

getBookmarksFromBrowser();
