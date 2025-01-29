import { createAddBookmark } from "../components/addBookmark.js";
import { div, htmlBody } from "../index.js";

export const showAddBookmark = (parent: HTMLElement) => {
  parent.childNodes[0].addEventListener("click", () => {
    // console.log(document.querySelector("[data-addform-visible]"));
    if (document.querySelector("[data-addform-visible]") === null) {
      createAddBookmark(div);
    } else {
      const element: any = document.querySelector("[data-addform-visible]");
      element.style.opacity = 0;
      element.style.transform = "scale(0.95)";
      setTimeout(() => {
        element.parentElement.removeChild(element);
      }, 150);
    }
  });
};
