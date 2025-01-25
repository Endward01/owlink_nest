export const createFooter = (parent: any) => {
    const footer = document.createElement("footer");
    footer.classList.add("bg-slate-500","h-3/100")
    parent.appendChild(footer);
}