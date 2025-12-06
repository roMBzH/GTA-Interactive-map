
let mapConfig = {}

function createDefaultMapConfig() {

    updateLoading("Création de la configuration de la map...", 5);

    mapConfig = {
        "mapOverlay": "img/map_black.jpg",
        "width": 2160,
        "height": 3840,
        "minZoom": -1.6,
        "maxZoom": 0,
        "zoomSnap": 0,
        "iconSize": [20, 20],
        "iconAnchor": [10, 20],
        "popupAnchor": [0, -20]
    }

    updateLoading("Création de la configuration de la map terminée...", 15);

}