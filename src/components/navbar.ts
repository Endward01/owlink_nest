export const createNavbar = (parent: any) => {
  const navbar = document.createElement("nav");
  navbar.classList.add("bg-slate-500","h-7/100")
  parent.appendChild(navbar);
};
