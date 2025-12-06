let map = null;
let mapBounds = null;
let mapOverlay = null;

function createInteractiveMap() {
    updateLoading("Création de la map intéractive...", 35);

    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom,
        zoomSnap: mapConfig.zoomSnap,
        maxBoundsViscosity: 1.0,
        inertia: false,  
    });

    // Bornes de l'image
    mapBounds = [[0, 0], [mapConfig.height, mapConfig.width]];
    map.setMaxBounds(mapBounds);
    map.fitBounds(mapBounds);

    // Ajouter l'image par défaut
    mapOverlay = L.imageOverlay(mapConfig.mapOverlay, mapBounds).addTo(map);

}

function displayInteractiveMap() {
    updateLoading("Ajout des différents markers...", 70);

    const centerY = mapConfig.height / 2;
    const centerX = mapConfig.width / 2;

    map.setZoom(map.minZoom);

    map.whenReady(() => {
        map.dragging.disable(); 
    });

    map.on("zoomend", () => {
        if (map.getZoom() <= mapConfig.minZoom) {
            map.dragging.disable();
            map.setView([centerY, centerX], map.getMinZoom(), { animate: true });
        } else {
            map.dragging.enable();
        }
    });

}


function addMarkers() {
    updateLoading("Ajout des différents markers...", 50);
}

function getCursorPos() {
    const xCoords = document.getElementById('x-coords')
    const yCoords = document.getElementById('y-coords')
    map.on('mousemove', function(e) {
        const x = e.latlng.lng.toFixed(0);
        const y = e.latlng.lat.toFixed(0);
        xCoords.textContent = `${x}`;
        yCoords.textContent = `${y}`;
    });
}