export const createNavbarMenuButton = (parent, icon) => {
    const navbarBtn = document.createElement("button");
    navbarBtn.classList.add("aspect-square", "p-1", "rounded-lg", "hover:bg-red-500", "cursor-pointer");
    navbarBtn.innerHTML += icon;
    parent.appendChild(navbarBtn);
};
