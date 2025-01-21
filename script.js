let planetArray = [ 
    {"name": "Guadalajara, Jalisco", "distance": "Panoramica Guadalajara"},
    {"name": "Morelos, Mexico", "distance": "Ecatepec de Morelos"},
    {"name": "Morelia, Michoacan", "distance": "Capitala de Morelia"},
    {"name": "Santo Domingo, Oaxaca", "distance": "Zocalo"},
    {"name": "Guadalajara, Jalisco", "distance": "Cathedral of the Assumption of Our Lady"},
    {"name": "Puebla, Puebla", "distance": "Catedral de Puebla"},
    {"name": "Uranus", "distance": "1.8 billion miles"},
    {"name": "Neptune", "distance": "2.8 billion miles"},
    {"name": "Pluto", "distance": "3.67 billion miles"}
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