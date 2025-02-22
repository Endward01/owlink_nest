export const createNavbarBrand = (parent) => {
    const navbarBrand = document.createElement("div");
    navbarBrand.classList.add("flex", "justify-between", "items-center", "gap-2", "px-1");
    const brandImg = document.createElement("img");
    brandImg.setAttribute("src", "../favicon/favicon-32x32.png");
    brandImg.classList.add("aspect-squer", "h-5/10");
    navbarBrand.appendChild(brandImg);
    const brandText = document.createElement("H2");
    brandText.classList.add("h-5/10", "text-lg", "font-medium");
    brandText.innerHTML += "Owlink Nest";
    navbarBrand.appendChild(brandText);
    parent.appendChild(navbarBrand);
};
