let bookmarks: any;

export const getBookmarksFromBrowser = () => {
  chrome.bookmarks.getTree((tree: any) => {
    const nodes = tree[0].children;
    for (const node of nodes) {
      if (node.title === "Bookmarks Toolbar" || node.title === "Bookmarks") {
        // console.log(node.children);
        displayBookmarks(node.children);
      }
    }
  });
};

// Recursively display the bookmarks
function displayBookmarks(nodes) {

  for (const node of nodes) {
    // If the node is a bookmark, create a list item and append it to the parent node
    if (node.url) {
      const listItem = document.createElement("li");
      const aTag = document.createElement("a");
      listItem.classList.add(
        "list-none",
        "bgColor",
        "bg-(--bg-trans-25)",
        "backdrop-blur-(--blur-mica)",
        "p-2",
        "rounded-lg",
      );

      aTag.textContent = node.title;
      aTag.setAttribute("href", node.url);
      aTag.setAttribute("target", "_blank");
      listItem.appendChild(aTag);

      const itemBox = document.querySelector(".itemBox");
      itemBox.appendChild(listItem);
    }

    // If the node has children, recursively display them
    if (node.children) {

      const sublist = document.createElement("ul");
      sublist.classList.add(
        "bgColor",
        "bg-(--bg-trans-25)",
        "backdrop-blur-(--blur-mica)",
        "p-2",
        "rounded-lg",
        "shadow-(--box-shadow-main)",
        "gap-2",
        "basis-1/3",
      );
      sublist.textContent = node.title;
      const groupBox = document.querySelector(".groupBox");
      groupBox.appendChild(sublist);

      const singleMother = node.children;

      for (const child of singleMother) {

        if (child.url) {
          const listItem = document.createElement("li");
          const aTag = document.createElement("a");
          listItem.classList.add("list-none");
          aTag.textContent = child.title;
          aTag.setAttribute("href", child.url);
          aTag.setAttribute("target", "_blank");
          listItem.appendChild(aTag);
          sublist.appendChild(listItem);
        }



      // displayBookmarks(node.children, sublist);
    }
  }
}
