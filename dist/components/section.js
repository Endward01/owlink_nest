export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow", "flex", "absolute", "size-full", "px-2", "py-16", "z-1");
    parent.appendChild(section);
    const drawBookmarks = () => {
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
