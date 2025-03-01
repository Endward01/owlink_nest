export const checkLocalStorage = () => {
  try {
    if (localStorage.getItem("bookmarks") === null) {
      const bookmarks: JSON[] = [];
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      // console.table(JSON.parse(localStorage.getItem("bookmarks")));
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
