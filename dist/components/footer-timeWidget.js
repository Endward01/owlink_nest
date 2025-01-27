export const createTimeWidget = (parent) => {
    const date = new Date();
    const current_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const current_time = date.getHours() + ":" + date.getMinutes();
    const dateWiget = document.createElement("div");
    dateWiget.classList.add("flex", "flex-col", "justify-between", "items-center", "text-xs");
    parent.appendChild(dateWiget);
    const currentDate = document.createElement("p");
    currentDate.innerText += current_time + " " + current_date;
    dateWiget.appendChild(currentDate);
};
