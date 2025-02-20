import { addBookmarkService } from "../services/addBookmarksService.js";
import { bgColor, elemColor, textColor } from "../services/color.js";

export const createAddBookmark = (parent: HTMLElement) => {
  const form: HTMLElement = document.createElement("form");

  form.onsubmit = (event) => {
    addBookmarkService(nameInput, urlInput, event);
  };

  form.classList.add(
    "absolute",
    "flex",
    "flex-col",
    "top-16",
    "right-0",
    "w-xs",
    "bg-(--bg-trans-25)",
    "backdrop-blur-(--blur-mica)",
    "p-2",
    "mx-2",
    "rounded-lg",
    "shadow-(--box-shadow-main)",
    textColor,
    "transition",
    "ease-in-out",
    "duration-150",
    "animate-(--animate-fade-in-scale)",
  );
  form.setAttribute("data-addForm-visible", "");

  const nameLabel: HTMLElement = document.createElement("label");
  nameLabel.innerText += "Title";
  nameLabel.setAttribute("for", "addName");
  nameLabel.classList.add("pl-2");
  form.appendChild(nameLabel);

  const nameInput: HTMLInputElement = document.createElement("input");
  nameInput.setAttribute("id", "addName");
  nameInput.setAttribute("name", "addName");
  nameInput.setAttribute("type", "text");
  nameInput.classList.add(
    "p-2",
    "mb-2",
    "rounded-lg",
    // bgColor,
    "shadow-(--box-shadow-inset-main-50)",
    `focus-visible:${textColor}`,
    "focus-visible:outline",
  );

  form.appendChild(nameInput);

  const urlLabel: HTMLElement = document.createElement("label");
  urlLabel.innerText += "Url";
  urlLabel.setAttribute("for", "addUrl");
  urlLabel.classList.add("pl-2");
  form.appendChild(urlLabel);

  const urlInput: HTMLInputElement = document.createElement("input");
  urlInput.setAttribute("id", "addUrl");
  urlInput.setAttribute("name", "addUrl");
  urlInput.setAttribute("type", "text");
  urlInput.classList.add(
    "p-2",
    "mb-2",
    "rounded-lg",
    // bgColor,
    "shadow-(--box-shadow-inset-main-50)",
    `focus-visible:${textColor}`,
    "focus-visible:outline",
  );

  form.appendChild(urlInput);

  const addBtm: HTMLElement = document.createElement("input");

  addBtm.classList.add(
    "p-2",
    "mt-2",
    "rounded-lg",
    bgColor,
    "w-7/10",
    "mx-auto",
    `hover:${textColor}`,
    "hover:outline",
    `focus-visible:${textColor}`,
    "focus-visible:outline",
    "cursor-pointer",
  );
  addBtm.setAttribute("type", "submit");

  addBtm.innerText += "Add Bookmark";

  form.appendChild(addBtm);

  parent.appendChild(form);
};
