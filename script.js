let planetArray = [ 
    {"name": "Mercury", "distance": "36 million miles", "size": "3,032 mile diameter", "description": "Mercury is the smallest planet in our solar system and closest to the Sun."},
    {"name": "Venus", "distance": "26 million miles", "size": "7,521 mile diameter", "description": "Venus has a thick, toxic atmosphere that traps heat, making it the hottest planet."},
    {"name": "Earth", "distance": "93 million miles", "size": "7,926 mile diameter", "description": "Earth is the only planet known to support life, with diverse ecosystems."},
    {"name": "Mars", "distance": "49 million miles", "size": "4,221 mile diameter", "description": "Mars is known as the Red Planet and is the focus of many exploration missions."},
    {"name": "Jupiter", "distance": "483.7 million miles", "size": "142,984 mile diameter", "description": "Jupiter is the largest planet in our solar system, with a prominent Great Red Spot."},
    {"name": "Saturn", "distance": "889.8 million miles", "size": "74,898 mile diameter", "description": "Saturn is famous for its extensive ring system, made mostly of ice particles."},
    {"name": "Uranus", "distance": "1.8 billion miles", "size": "31,763 mile diameter", "description": "Uranus has a unique blue-green color due to methane in its atmosphere."},
    {"name": "Neptune", "distance": "2.8 billion miles", "size": "30,775 mile diameter", "description": "Neptune is known for its deep blue color and supersonic winds."},
    {"name": "Pluto", "distance": "3.67 billion miles", "size": "1,477 mile diameter", "description": "Once classified as the ninth planet, Pluto is now considered a dwarf planet."}
];


const planetNameElement = document.querySelector("#planet-name");
const distanceElement = document.querySelector("#planet-distance");
const sizeElement = document.querySelector("#planet-size");
const descriptionElement = document.querySelector("#planet-description");


const navbarButtons = document.querySelectorAll("#grid1 .btn");


navbarButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        currentIndex = index;
        updateActiveSlide();
    });
});


function updateInfo(index) {
    const planet = planetArray[index];
    planetNameElement.textContent = planet.name;
    distanceElement.textContent = planet.distance;
    sizeElement.textContent = planet.size;
    descriptionElement.textContent = planet.description;
}


let currentIndex = 0; 
const items = document.querySelectorAll(".slider .item");

document.querySelector("#prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateActiveSlide();
});

document.querySelector("#next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateActiveSlide();
});


function updateActiveSlide() {
    items.forEach((item, index) => {
        item.classList.toggle("active", index === currentIndex);
    });
    updateInfo(currentIndex);
}


updateInfo(currentIndex);