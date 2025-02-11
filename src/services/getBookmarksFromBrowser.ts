export const getBookmarksFromBrowser = () => {
  chrome.bookmarks.getTree((tree: any) => {
    const nodes = tree[0].children;
    for (const node of nodes) {
      if (node.title === "Bookmarks Toolbar" || node.title === "Bookmarks") {
        console.log();
        displayBookmarks(node.children, document.querySelector("section"));
      }
    }
  });
};

// Recursively display the bookmarks
function displayBookmarks(nodes, parentNode) {
  for (const node of nodes) {
    // If the node is a bookmark, create a list item and append it to the parent node
    if (node.url) {
      const listItem = document.createElement("li");
      listItem.textContent = node.title;
      parentNode.appendChild(listItem);
    }

    // If the node has children, recursively display them
    if (node.children) {
      const sublist = document.createElement("ul");
      parentNode.appendChild(sublist);
      displayBookmarks(node.children, sublist);
    }
  }
}
