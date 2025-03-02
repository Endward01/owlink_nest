export const checkLocalStorage = () => {
  try {
    if (localStorage.getItem("bookmarks") === null) {
      const bookmarks: JSON[] = [];
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      console.warn("LocalStorage initialized");
    } else {
      console.warn("LocalStorage already initialized");
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
