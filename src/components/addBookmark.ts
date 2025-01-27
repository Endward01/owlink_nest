import { bgColor, elemColor, textColor } from "../services/color.js";

export const createAddBookmark = (parent: HTMLElement) => {
  const form = document.createElement("form");
  form.classList.add(
    "absolute",
    "flex",
    "flex-col",
    "top-16",
    "right-0",
    elemColor,
    "p-2",
    "rounded-lg",
    "shadow-lg",
    textColor,
    "transition",
    "ease-in-out",
    "duration-150",
    "animate-(--animate-fade-in-scale)",
  );
  form.setAttribute("data-addForm-visible", "");

  const nameLabel = document.createElement("label");
  nameLabel.innerText += "Title";
  nameLabel.setAttribute("for", "addName");
  nameLabel.classList.add("pl-2");
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "addName");
  nameInput.setAttribute("name", "addName");
  nameInput.setAttribute("type", "text");
  nameInput.classList.add(
    "p-2",
    "mb-2",
    "rounded-lg",
    bgColor,
    "inset-shadow-sm",
  );

  form.appendChild(nameInput);

  const urlLabel = document.createElement("label");
  urlLabel.innerText += "Url";
  urlLabel.setAttribute("for", "addUrl");
  urlLabel.classList.add("pl-2");
  form.appendChild(urlLabel);

  const urlInput = document.createElement("input");
  urlInput.setAttribute("id", "addUrl");
  urlInput.setAttribute("name", "addUrl");
  urlInput.setAttribute("type", "text");
  urlInput.classList.add(
    "p-2",
    "mb-2",
    "rounded-lg",
    bgColor,
    "inset-shadow-sm",
  );

  form.appendChild(urlInput);

  const addBtm = document.createElement("button");
  addBtm.classList.add(
    "p-2",
    "mt-2",
    "rounded-lg",
    bgColor,
    "w-7/10",
    "mx-auto",
  );

  addBtm.innerText += "Add Bookmark";

  form.appendChild(addBtm);

  parent.appendChild(form);
};
