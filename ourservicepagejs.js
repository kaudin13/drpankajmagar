document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    
    const tilesData = [
        { title: "Allergy, Asthma and TB treatmen", desc: "At The Chest Clinic in Pune, we offer specialized treatment for  allergies, asthma, and tuberculosis with a focus on comprehensive,  patient-centered care. Our experienced team uses the latest diagnostic  tools and treatment techniques to manage and alleviate symptoms  effectively. For allergies, we provide detailed assessments to identify  triggers and create customized management plans. Our asthma care  includes advanced therapies and patient education to help you manage and reduce asthma attacks. In tuberculosis treatment, we employ proven  protocols and regular monitoring to ensure successful outcomes. At The  Chest Clinic, our commitment is to your respiratory health, offering  compassionate care and ongoing support to improve your quality of life.", img: "https://via.placeholder.com/300/FF5733" },
        { title: "Mountain View", desc: "Snowy peaks stretch high into the sky, offering breathtaking panoramic views. Fresh air, adventure trails, and untouched beauty make this a paradise for hikers and nature lovers alike.", img: "https://via.placeholder.com/300/33FF57" },
        { title: "City Lights", desc: "A vibrant cityscape at night, filled with dazzling neon lights, endless energy, and bustling streets. Perfect for night owls looking to explore the dynamic heartbeat of urban life.", img: "https://via.placeholder.com/300/3357FF" },
        { title: "Forest Trail", desc: "A peaceful walk through the woods surrounded by towering trees, rustling leaves, and chirping birds. The perfect escape for solitude, mindfulness, and reconnecting with nature.", img: "https://via.placeholder.com/300/57FF33" },
        { title: "Desert Dunes", desc: "Golden sands rolling endlessly under the bright sun, shifting and shaping under the wind. A mesmerizing and extreme environment full of adventure, mystery, and ancient beauty.", img: "https://via.placeholder.com/300/FF33A1" },
        { title: "Ocean Waves", desc: "Crystal-clear waters crash against the rocky shore, bringing a rhythmic symphony of sounds. A paradise for surfers, beach lovers, and those who dream of the deep blue sea.", img: "https://via.placeholder.com/300/33A1FF" },
        { title: "Countryside", desc: "Green fields stretch for miles, dotted with farmhouses and winding dirt roads. The perfect setting for peaceful mornings, rustic charm, and embracing the slow pace of rural life.", img: "https://via.placeholder.com/300/A133FF" },
        { title: "Snowy Cabin", desc: "A cozy retreat nestled in the snow-covered mountains. The warmth of a fireplace, the scent of pine trees, and the magical stillness of winter create the ultimate escape.", img: "https://via.placeholder.com/300/FFA133" },
        { title: "Cherry Blossoms", desc: "Soft pink petals dance in the wind as cherry trees bloom, creating a dreamlike landscape. A symbol of renewal, fleeting beauty, and the arrival of spring in Japan.", img: "https://via.placeholder.com/300/FF3380" },
        { title: "Tropical Island", desc: "Paradise found—palm trees, white sand beaches, and crystal-clear waters. A haven for relaxation, adventure, and soaking in the warm tropical sun far from the worries of the world.", img: "https://via.placeholder.com/300/33FFDD" }
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
  