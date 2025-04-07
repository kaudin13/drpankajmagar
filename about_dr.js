document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const tiles = document.querySelectorAll(".carousel-item");
    const modal = document.querySelector(".blog-modal");
    const modalTitle = document.querySelector("#modal-title");
    const modalCaption = document.querySelector("#modal-caption");
    const closeModal = document.querySelector(".modal-close");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const overlay = document.createElement("div"); // Create overlay dynamically

    overlay.classList.add("overlay");
    document.body.appendChild(overlay); // Append to body

    let index = 0;
    const totalItems = tiles.length;
    const visibleItems = 4;
    const tileWidth = tiles[0].offsetWidth + 30;
    let autoSlide;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * tileWidth}px)`;
    }

    function nextSlide() {
        if (index < totalItems - visibleItems) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        if (index > 0) {
            index--;
        } else {
            index = totalItems - visibleItems;
        }
        updateCarousel();
        startAutoSlide();
    });

    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    tiles.forEach((tile) => {
        tile.addEventListener("click", () => {
            stopAutoSlide();
            modalTitle.textContent = tile.dataset.title; // Set modal title
            modalCaption.innerHTML = `<p>${tile.dataset.content}</p>`; // Set modal content inside paragraph
            modal.style.display = "block";
            overlay.classList.add("active"); // Activate overlay
        });
    });

    function closeModalFunction() {
        modal.style.display = "none";
        overlay.classList.remove("active"); // Remove overlay
        startAutoSlide();
    }

    closeModal.addEventListener("click", closeModalFunction);
    overlay.addEventListener("click", closeModalFunction); // Clicking overlay closes modal

    // Start auto-slide when the page loads
    startAutoSlide();
});
