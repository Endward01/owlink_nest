export const createBackgroundImage = (parent: HTMLElement) => {
  const div = document.createElement("div");
  div.classList.add(
    "bg-[url(https://picsum.photos/1920/1080?blur)]",
    "w-full",
    "h-full",
    "bg-cover",
    "bg-[50%_50%]",
    "z-0",
  );

  parent.appendChild(div);
};
