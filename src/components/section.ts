export const createSection = (parent: HTMLElement) => {
  const section = document.createElement("section");
  section.classList.add("grow");
  parent.appendChild(section);
};
