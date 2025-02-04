export const addBookmarkService = (title, url, event) => {
    event.preventDefault();
    console.log(title.value);
    console.log(url.value);
};
