export const checkLocalStorage = () => {
    try {
        if (localStorage.getItem("bookmarks") === null) {
            const bookmarks = [];
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        }
        else {
        }
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
