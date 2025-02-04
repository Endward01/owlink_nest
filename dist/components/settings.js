import { textColor } from "../services/color.js";
export const createSettings = (parent) => {
    const div = document.createElement("div");
    div.classList.add("absolute", "flex", "flex-col", "top-16", "right-0", "w-xs", "bg-(--bg-trans-25)", "backdrop-blur-(--blur-mica)", "p-2", "mx-2", "rounded-lg", "shadow-(--box-shadow-main)", textColor, "transition", "ease-in-out", "duration-150", "animate-(--animate-fade-in-scale)");
    div.setAttribute("data-settings-visible", "");
    parent.appendChild(div);
};
