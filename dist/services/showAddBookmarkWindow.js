import { createAddBookmark } from "../components/addBookmark.js";
export const showAddBookmark = (parent) => {
    parent.childNodes[0].addEventListener("click", () => {
        const section = document.querySelector("section");
        if (document.querySelector("[data-addform-visible]") === null) {
            if (section !== null) {
                createAddBookmark(section);
            }
        }
        else {
            const element = document.querySelector("[data-addform-visible]");
            element.style.opacity = 0;
            element.style.transform = "scale(0.95)";
            setTimeout(() => {
                element.parentElement.removeChild(element);
            }, 150);
        }
    });
};
