import { createNewBookmark } from "../services/createNewBookmark.js";
import { newColorSheme } from "../services/color.js";
import { Hash } from "node:crypto";

export const createAddBookmark = (parent: HTMLElement) => {
  const form: HTMLElement = document.createElement("form");

  form.onsubmit = (event) => {
    createNewBookmark(nameInput, urlInput, columnInput, folderInput, event);
  };

  form.classList.add(
    "primary",
    "back",
    "absolute",
    "flex",
    "flex-col",
    // "top-16",
    "right-0",
    "w-xs",
    "p-2",
    "mx-2",
    "rounded-lg",
    "shadow-(--box-shadow-main)",
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
    // "rounded-lg",
    // "shadow-(--box-shadow-inset-main-50)",
    // "outline-transparent",
    "outlineFocus",
    "duration-300",
    "ease-in-out",
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
    // "rounded-lg",
    "focus-visible:outline",
    "outlineFocus",
    "duration-300",
    "ease-in-out",
    // "shadow-(--box-shadow-inset-main-50)",
  );

  form.appendChild(urlInput);

  const columnLabel: HTMLElement = document.createElement("label");
  columnLabel.innerText += "Column";
  columnLabel.setAttribute("for", "addUrl");
  columnLabel.classList.add("pl-2");
  form.appendChild(columnLabel);

  const columnInput: HTMLSelectElement = document.createElement("select");
  columnInput.setAttribute("id", "addColumn");
  columnInput.setAttribute("name", "addColumn");
  columnInput.setAttribute("type", "text");
  columnInput.classList.add(
    "p-2",
    "mb-2",
    // "rounded-lg",
    "focus-visible:outline",
    "outlineFocus",
    "duration-300",
    "ease-in-out",
    // "shadow-(--box-shadow-inset-main-50)",
  );
  for (let i = 0; i <= 4; i++) {
    const option = document.createElement("option");
    option.value = i.toString();
    option.innerText = (i + 1).toString();
    columnInput.appendChild(option);
  }

  form.appendChild(columnInput);

  const addBtm: HTMLElement = document.createElement("button");

  addBtm.classList.add(
    "secondary",
    "button",
    "p-2",
    "mt-2",
    "rounded-lg",
    "w-7/10",
    "mx-auto",
    "cursor-pointer",
    "active:",
  );
  addBtm.setAttribute("type", "submit");

  addBtm.innerText += "Add Bookmark";

  form.appendChild(addBtm);

  parent.appendChild(form);
};
