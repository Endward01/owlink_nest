import { generateRandomId } from "./generateRandomId.js";
export const addBookmarkService = (title, url, event) => {
    event.preventDefault();
    const newBookmark = {
        parentId: generateRandomId(),
        title: title.value,
        url: url.value,
    };
    const bookmarksString1 = localStorage.getItem("bookmarks");
    const bookmarks = JSON.parse(bookmarksString1);
    bookmarks.push(newBookmark);
    const bookmarksString2 = JSON.stringify(bookmarks);
    localStorage.setItem("bookmarks", bookmarksString2);
};
