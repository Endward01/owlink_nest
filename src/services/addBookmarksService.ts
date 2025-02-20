export const addBookmarkService = (
  title: HTMLInputElement,
  url: HTMLInputElement,
  event: Event,
) => {
  event.preventDefault();
  console.log(title.value);
  console.log(url.value);
};
