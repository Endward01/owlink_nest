export const addBookmarkService = (
  title: HTMLFormElement,
  url: HTMLFormElement,
  event: Event,
) => {
  event.preventDefault();
  console.log(title.value);
  console.log(url.value);
};
