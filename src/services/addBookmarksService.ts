export const addBookmarkService = (
  title: HTMLElement,
  url: HTMLElement,
  event: Event,
) => {
  event.preventDefault();
  console.log(title.value);
  console.log(url.value);
};
