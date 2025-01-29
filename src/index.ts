import { createNavbar } from "./components/navbar.js";
import { createSection } from "./components/section.js";
import { createFooter } from "./components/footer.js";
import { changeTitle } from "./services/changePageTitle.js";
import { bgColor } from "./services/color.js";
import { createAddBookmark } from "./components/addBookmark.js";

export const htmlBody: any = document.querySelector("body");
htmlBody.classList.add("h-lvh", "flex", bgColor);
export const div: HTMLElement = document.createElement("div");
div.classList.add(
  "flex",
  "grow",
  "container",
  "mx-auto",
  bgColor,
  "overflow-hidden",
  "flex",
  "flex-col",
  "relative",
  "shadow-[box-shadow:rgba(50,50,93,0.25)0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset;]",
  "rounded-lg",
  "px-2",
  "my-2",
);
htmlBody.appendChild(div);

createNavbar(div);
createSection(div);
createFooter(div);

changeTitle();
