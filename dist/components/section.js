export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("bg-slate-600", "h-90/100");
    parent.appendChild(section);
};
