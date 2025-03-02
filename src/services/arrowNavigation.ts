import { cpus } from "os";

export const arrowNavigation = () => {
  const items = document.querySelectorAll("li");
  let currentIndex = -1;

  // Function to update the active item
  function updateActiveItem() {
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.toggle("focus", index === currentIndex);
      } else {
        item.classList.remove("focus");
      }
    });
  }

  // Initial highlight
  // updateActiveItem();
  document.addEventListener("keydown", (event) => {
    // console.log(event.key);

    if (event.key === "ArrowUp") {
      // Your action to perform when the key is pressed
      event.preventDefault();
      if (currentIndex === -1) {
        currentIndex = 0;
      }
      currentIndex = (currentIndex - 1 + items.length) % items.length; // Move up
      updateActiveItem();
    }
    if (event.key === "ArrowDown") {
      // Your action to perform when the key is pressed
      event.preventDefault();
      currentIndex = (currentIndex + 1) % items.length; // Move down
      updateActiveItem();
      // console.log(event.key);
    }
    if (event.key === "ArrowLeft") {
      // Your action to perform when the key is pressed
      event.preventDefault();
    }
    if (event.key === "ArrowRight") {
      // Your action to perform when the key is pressed
      event.preventDefault();
    }
    if (event.key === "Enter") {
      // Your action to perform when the key is pressed
      if (currentIndex === -1) {
        return;
      }
      // console.log(items[currentIndex].children[0]);
      items[currentIndex].children[0].click();
      event.preventDefault();
    }
    if (event.key === "Escape") {
      // Your action to perform when the key is pressed
      currentIndex = -1; // Move down
      updateActiveItem();
      event.preventDefault();
    } else {
      return;
    }
  });
  document.addEventListener('mousemove', (event) => {
    currentIndex = -1; // Move down
    updateActiveItem();
    event.preventDefault();
  });
});
