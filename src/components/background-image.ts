export const createBackgroundImage = (parent: HTMLElement) => {
  const div = document.createElement("div");
  div.classList.add(
    // "bg-[url(https://picsum.photos/1920/1080?blur)]",
    // "bg-[url(https://image.fonwall.ru/o/oh/landscape-nature-forest-rock-exbo.jpeg?auto=compress&fit=crop&w=1920&h=1080&domain=img1.fonwall.ru)]",
    "w-full",
    "h-full",
    "bg-cover",
    "bg-[50%_50%]",
    "z-0",
    "blur-xs",
  );

  parent.appendChild(div);
};
