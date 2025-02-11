export const getBookmarksFromBrowser = () => {
    chrome.bookmarks.getTree((tree) => {
        const nodes = tree[0].children;
        for (const node of nodes) {
            if (node.title === "Bookmarks Toolbar" || node.title === "Bookmarks") {
                console.log();
                displayBookmarks(node.children, document.querySelector("section"));
            }
        }
    });
};
function displayBookmarks(nodes, parentNode) {
    for (const node of nodes) {
        if (node.url) {
            const listItem = document.createElement("li");
            listItem.textContent = node.title;
            parentNode.appendChild(listItem);
        }
        if (node.children) {
            const sublist = document.createElement("ul");
            parentNode.appendChild(sublist);
            displayBookmarks(node.children, sublist);
        }
    }
}
