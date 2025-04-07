document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    
    const tilesData = [
        { title: "Pleurocentesis", desc: "Pleurocentesis, also known as thoracentesis, is a minimally invasive procedure that removes excess fluid from the pleural space. The pleural space is the area between the lungs and the chest wall.", img: "https://via.placeholder.com/300/FF5733" },
        { title: "Pleural biopsy", desc: "A pleural biopsy is a procedure to remove a sample of tissue from the pleura, the thin membrane that lines the chest cavity and lungs. It's performed to check for infection, cancer, or other conditions. .", img: "https://via.placeholder.com/300/33FF57" },
        { title: "Intercostal Drain (ICD)/Pigtail Catheter", desc: " A flexible tube inserted through the chest wall to drain air, fluid, or blood from the pleural space. It's also known as a chest drain or pleural drain. ", img: "https://via.placeholder.com/300/3357FF" },
        { title: "Pigtail Catheter", desc: " A thin, long catheter used to drain fluids from organs, ducts, or abscesses and  Pleural drainage.", img: "https://via.placeholder.com/300/57FF33" },
        { title: "Bronchoscopy", desc: " A bronchoscopy is a procedure that allows a doctor to see the inside of your lungs.", img: "https://via.placeholder.com/300/FF33A1" },
        { title: "Thoracoscopy", desc: " is a minimally invasive procedure that can be used for diagnosis and treatment of lung issues. It's commonly used to diagnose cause of pleural effusion.", img: "https://via.placeholder.com/300/33A1FF" },
        { title: "Pulmonary function testing (PFTs) ", desc: "TPulmonary function testing (PFTs) evaluates lung function, while cardiopulmonary exercise testing (CPET) assesses the heart and lungs' combined performance during exercise, providing complementary information for diagnosing and monitoring respiratory and cardiovascular conditions.", img: "https://via.placeholder.com/300/A133FF" },
        { title: "Allergy tests", desc: "Allergy tests help identify substances that trigger allergic reactions, and common methods include skin prick tests, blood tests measuring specific IgE antibodies, and patch tests for contact dermatitis.", img: "https://via.placeholder.com/300/FFA133" },
        { title: "Polysomnography", desc: "A sleep test, also known as polysomnography, is a diagnostic procedure that monitors various body functions during sleep to identify and diagnose sleep disorders like sleep apnea, narcolepsy, and insomnia.", img: "coc4img.png" },
    ];
    
    container.innerHTML = ""; // Clear any existing tiles before adding new ones
    
    tilesData.forEach(data => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        
        tile.innerHTML = `
            <div class="tile-content">
                <img src="${data.img}" alt="${data.title}">
                <div class="caption">
                    <h3>${data.title}</h3>
                    <p class="short-content">${data.desc.substring(0, 100)}...</p>
                    <p class="extra-content" style="display: none;">${data.desc}</p>
                    <a href="#" class="view-more" onclick="toggleContent(this); return false;">View More</a>
                </div>
            </div>
        `;
        
        container.appendChild(tile);
    });
  });
  
  function toggleContent(link) {
    const shortContent = link.previousElementSibling.previousElementSibling;
    const extraContent = link.previousElementSibling;
    
    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        shortContent.style.display = "none";
        extraContent.style.display = "block";
        link.textContent = "View Less";
    } else {
        shortContent.style.display = "block";
        extraContent.style.display = "none";
        link.textContent = "View More";
    }
  }
  