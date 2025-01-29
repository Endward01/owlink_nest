import { createAddBookmark } from "../components/addBookmark.js";
import { div } from "../index.js";
export const showAddBookmark = (parent) => {
    parent.childNodes[0].addEventListener("click", () => {
        if (document.querySelector("[data-addform-visible]") === null) {
            createAddBookmark(div);
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
