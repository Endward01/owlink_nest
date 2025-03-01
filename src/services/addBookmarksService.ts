import { generateRandomId } from "./generateRandomId.js";
export const addBookmarkService = (
  title: HTMLInputElement,
  url: HTMLInputElement,
  event: Event,
) => {
  event.preventDefault();
  const newBookmark = {
    parentId: generateRandomId(),
    title: title.value,
    url: url.value,
  };
  const bookmarksString1 = localStorage.getItem("bookmarks");
  const bookmarks = JSON.parse(bookmarksString1);
  // console.table(bookmarks);
  bookmarks.push(newBookmark);

  const bookmarksString2 = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksString2);
};
