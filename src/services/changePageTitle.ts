export const changeTitle = async () => {
  let titleName: string = document.title;
  const url: string = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.title = `${data.text} - Owlink Nest`;
    return;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
