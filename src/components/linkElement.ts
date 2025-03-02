export const createLinkElement = (section: HTMLElement) => {
  const bookmarksString = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  console.log(bookmarksString);
  // console.log(document.querySelector("section")?.children);
  for (const bookmark of bookmarksString) {
    // console.log(bookmark.column);
    const listItem = document.createElement("li");
    listItem.classList.add(
      "list-none",
      "rounded-lg",
      "duration-150",
      "ease-in-out",
      "link",
    );
    listItem.setAttribute("link-id", bookmark.id);
    const link = document.createElement("a");
    link.classList.add(
      "link-decoration-none",
      "w-full",
      "block",
      "py-[2px]",
      "px-4",
    );
    link.setAttribute("target", "_blank");
    link.setAttribute("href", bookmark.url);
    link.textContent = bookmark.title;
    listItem.appendChild(link);
    document
      .querySelector("section")
      ?.children[bookmark.column].appendChild(listItem);
  }
};
