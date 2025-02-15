export const createSection = (parent) => {
    const section = document.createElement("section");
    section.classList.add("grow", "flex", "absolute", "size-full", "px-2", "py-16", "z-1");
    const groupBox = document.createElement("div");
    groupBox.classList.add("groupBox", "basis-3/4", "flex", "items-start", "gap-2", "flex-wrap");
    section.appendChild(groupBox);
    const itemBox = document.createElement("div");
    itemBox.classList.add("itemBox", "basis-1/4", "flex", "flex-col", "gap-2");
    section.appendChild(itemBox);
    parent.appendChild(section);
};
