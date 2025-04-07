document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const captionContainer = document.getElementById("carousel-caption-container");
    const captionMain = document.getElementById("carousel-caption");
    const captionSub = document.getElementById("carousel-cap");

    const captions = [
        "Bronchoscopy Services",
        "Pulmonary Function Test",
        "Sleep Study Analysis",
        "Allergy Testing",
        "Respiratory Therapy",
        "COPD Management",
        "Lung Cancer Screening",
        "Asthma Treatment"
    ];

    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides in a row
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    function updateSlide(position) {
        track.style.transform = `translateX(-${position}px)`;
        captionMain.textContent = captions[currentIndex];
        captionSub.textContent = captions[currentIndex];
    }

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(slideWidth * currentIndex);
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide(slideWidth * currentIndex);
    });

    // Initialize first caption
    captionMain.textContent = captions[currentIndex];
    captionSub.textContent = captions[currentIndex];
});


//homepage carasoul
let index = 0;
        const visibleSlides = 4;
        const slides = document.querySelectorAll(".slide-container");
        const totalSlides = slides.length;
        const slideWidth = slides[0].offsetWidth + 15;

        function moveSlide(direction) {
            index += direction * visibleSlides;
            if (index < 0) index = 0;
            if (index > totalSlides - visibleSlides) index = totalSlides - visibleSlides;
            document.querySelector(".carousel-wrapper").style.transform = `translateX(-${index * slideWidth}px)`;
        }
        setInterval(() => moveSlide(1), 3000);

//request appointment
document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.querySelector("#datePicker");
    let timeInput = document.querySelector("#timePicker");
    let locationSelect = document.querySelector("#locationSelect");
    let availableTimes = {}; 

    function updateTimeOptions() {
        let location = locationSelect.value;
        let times = [];

        if (location === "Karvenagar") {
            times = generateHourlySlots(18, 19);
        } else if (location === "Nanded City") {
            times = generateHourlySlots(10, 12);
        }

        timeInput.innerHTML = '<option value="">Select Time</option>'; 
        times.forEach(time => {
            let option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeInput.appendChild(option);
        });
    }

    function generateHourlySlots(startHour, endHour) {
        let times = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minutes = 0; minutes < 60; minutes += 20) {
                let formattedHour = hour.toString().padStart(2, '0');
                let formattedMinutes = minutes.toString().padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinutes}`);
            }
        }
        return times;
    }

    flatpickr(dateInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        disableMobile: true,
    });

    updateTimeOptions();
    locationSelect.addEventListener("change", updateTimeOptions);
});

function sendToWhatsApp(event) {
    event.preventDefault();

    let name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
    let email = document.querySelector('input[placeholder="Enter your email"]').value.trim();
    let phone = document.querySelector('input[placeholder="Enter your mobile number"]').value.trim();
    let location = document.querySelector("#locationSelect").value;
    let date = document.querySelector("#datePicker").value;
    let time = document.querySelector("#timePicker").value;
    let message = document.querySelector('textarea').value.trim();

    if (!name || !email || !phone || !location || !date || !time) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    let whatsappNumber = "919067403056";
    let whatsappMessage = `Patient Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ALocation: ${location}%0ADate: ${date}%0ATime: ${time}%0AMessage: ${message}`;

    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
}





