$(document).ready(function() {
    let planetArray = [ 
        {"name": "Guadalajara, Jalisco", "distance": "Panoramica Guadalajara"},
        {"name": "Morelos, Mexico", "distance": "Ecatepec de Morelos"},
        {"name": "Morelia, Michoacan", "distance": "Capitala de Morelia"},
        {"name": "Santo Domingo, Oaxaca", "distance": "Zocalo"},
        {"name": "Guadalajara, Jalisco", "distance": "Cathedral of the Assumption of Our Lady"},
        {"name": "Puebla, Puebla", "distance": "Catedral de Puebla"},
        {"name": "Mazatlán, Sinaloa", "distance": "Pacific shoreline"},
        {"name": "Quintana Roo, Yucatan", "distance": "Playa del Carmen"},
        {"name": "San Luis Potosi, San Luis Potosi", "distance": "Catedral Metropolitana de San Luis Rey"}
    ];
    
    let currentIndex = 0;
    const items = $(".slider .item");
    const totalItems = items.length;
    
    function updateActiveSlide() {
        items.removeClass("active").eq(currentIndex).addClass("active");
        updateInfo(currentIndex);
    }
    
    function updateInfo(index) {
        let planet = planetArray[index];
        $("#planet-name").text(planet.name);
        $("#planet-distance").text(planet.distance);
    }
    
    $("#prev").click(function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateActiveSlide();
    });
    
    $("#next").click(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateActiveSlide();
    });
    
    $(".moreIndicator").click(function() {
        let indicator = $(this);
        let details = $(".card-body");
        indicator.toggleClass("rot90 rot270");
        details.slideToggle();
    });
    
    $("#toggleInfo").click(function() {
        $(".card-body").slideToggle();
    });
    
    updateActiveSlide();
    
    $("#nextPhoto").css({ right: "10px" });
    $("#prevPhoto").css({ left: "10px", transform: "scaleX(-1)" });
    
    $("#nextPhoto, #prevPhoto").hover(
        function() { $(this).css("opacity", "0.8"); },
        function() { $(this).css("opacity", "1"); }
    );
});