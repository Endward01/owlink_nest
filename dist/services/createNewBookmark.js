import { generateRandomId } from "./generateRandomId.js";
export const createNewBookmark = (title, url, column, folder, event) => {
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
    const bookmarksString1 = localStorage.getItem("bookmarks") || "[]";
    const bookmarks = JSON.parse(bookmarksString1);
    bookmarks.push(newBookmark);
    const bookmarksString2 = JSON.stringify(bookmarks);
    localStorage.setItem("bookmarks", bookmarksString2);
};
