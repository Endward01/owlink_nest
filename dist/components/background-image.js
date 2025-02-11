export const createBackgroundImage = (parent) => {
    const div = document.createElement("div");
    div.classList.add("w-full", "h-full", "bg-cover", "bg-[50%_50%]", "z-0");
    parent.appendChild(div);
};
