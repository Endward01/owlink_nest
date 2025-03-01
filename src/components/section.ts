import { elemColor } from "../services/color.js";
import { createSectionColumn } from "./section-column.js";
import { createSettings } from "./settings.js";

export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add(
    "grow",
    "flex",
    "absolute",
    "size-full",
    "px-2",
    "py-16",
    "z-1",
  );
  parent.appendChild(section);

  const drawBookmarks = () => {
    // console.log("drawBookmarks");
    const bookmarksString = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(bookmarksString);
    for (const bookmark of bookmarksString) {
      const link = document.createElement("a");
      link.href = bookmark.url;
      link.textContent = bookmark.title;
      link.classList.add("text-blue-500", "hover:underline");
      section.appendChild(link);
    }
  };
  drawBookmarks();
};
