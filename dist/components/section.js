export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow");
    parent.appendChild(section);
};
