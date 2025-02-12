let bookmarks;
export const getBookmarksFromBrowser = () => {
    chrome.bookmarks.getTree((tree) => {
        const nodes = tree[0].children;
        for (const node of nodes) {
            if (node.title === "Bookmarks Toolbar" || node.title === "Bookmarks") {
                console.log(node.children);
                displayBookmarks(node.children, document.querySelector("section"));
            }
        }
    });
};
function displayBookmarks(nodes, parentNode) {
    for (const node of nodes) {
        if (node.url) {
            const listItem = document.createElement("li");
            const aTag = document.createElement("a");
            listItem.classList.add("list-none");
            aTag.textContent = node.title;
            aTag.setAttribute("href", node.url);
            aTag.setAttribute("target", "_blank");
            listItem.appendChild(aTag);
            parentNode.appendChild(listItem);
        }
        if (node.children) {
            const sublist = document.createElement("ul");
            sublist.textContent = node.title;
            parentNode.appendChild(sublist);
            displayBookmarks(node.children, sublist);
        }
    }
}
