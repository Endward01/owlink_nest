import { createLinkElement } from "../components/linkElement.js";
import { generateRandomId } from "./generateRandomId.js";

export const createNewBookmark = (
  title: HTMLInputElement,
  url: HTMLInputElement,
  column: HTMLSelectElement,
  folder: HTMLSelectElement,
  event: Event,
) => {
  event.preventDefault();

  const newBookmark = {
    title: title.value,
    url: url.value,
    type: "bookmark",
    column: column.value,
    id: generateRandomId(),
  };
  if (newBookmark.title.trim() === "" || newBookmark.url.trim() === "") {
    return;
  }
  if (!newBookmark.title || !newBookmark.url) {
    return;
  }

  const bookmarksString1: string = localStorage.getItem("bookmarks") || "[]";
  const bookmarks = JSON.parse(bookmarksString1);
  // console.table(bookmarks);
  bookmarks.push(newBookmark);
  const bookmarksString2 = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksString2);
};
