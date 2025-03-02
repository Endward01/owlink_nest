export const arrowNavigation = () => {
    const items = document.querySelectorAll("li");
    let currentIndex = -1;
    function updateActiveItem() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.toggle("focus", index === currentIndex);
            }
            else {
                item.classList.remove("focus");
            }
        });
    }
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (currentIndex === -1) {
                currentIndex = 0;
            }
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateActiveItem();
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % items.length;
            updateActiveItem();
        }
        if (event.key === "ArrowLeft") {
            event.preventDefault();
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
        }
        if (event.key === "Enter") {
            if (currentIndex === -1) {
                return;
            }
            items[currentIndex].children[0].click();
            event.preventDefault();
        }
        if (event.key === "Escape") {
            currentIndex = -1;
            updateActiveItem();
            event.preventDefault();
        }
        else {
            return;
        }
    });
    document.addEventListener('mousemove', (event) => {
        currentIndex = -1;
        updateActiveItem();
        event.preventDefault();
    });
};
