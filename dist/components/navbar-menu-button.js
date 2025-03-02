export const createNavbarMenuButton = (parent, icon) => {
    const navbarBtn = document.createElement("button");
    navbarBtn.classList.add("primary", "button", "aspect-square", "p-1", "rounded-lg", "cursor-pointer", "shadow-(--box-shadow-main)");
    navbarBtn.innerHTML += icon;
    parent.appendChild(navbarBtn);
};
