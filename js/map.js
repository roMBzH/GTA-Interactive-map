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
    addVendorMarkers();
    addJobMarkers();
    addLaboMarkers();
    addMethMarkers();
    addDealMarkers();
}

function addVendorMarkers() {

    const vendorMarkerIco = L.icon({
        iconUrl: 'img/dot/vendor-dot.svg',
        iconSize: mapConfig.iconSize,
        iconAnchor: mapConfig.iconAnchor,
        popupAnchor: mapConfig.popupAnchor
    });

    vendorMarkerData.forEach(marker => {
        const mapMarker = L.marker(marker.pos, {icon: vendorMarkerIco}).addTo(map)
        .bindPopup(`
            <div class="popup-container">
                PopupBinding
                <h3>${marker.name}</h3>
            </div>
        `);

        const li = document.createElement('li');
        li.textContent = marker.name;
        li.addEventListener('click', () => {
            map.flyTo(marker.pos, 0, { animate: true, duration: 2 });
            mapMarker.openPopup();
        });

        document.getElementById('vendor-list').appendChild(li);
    });

}

function addJobMarkers() {

    const jobMarkerIco = L.icon({
        iconUrl: 'img/dot/job-dot.svg',
        iconSize: mapConfig.iconSize,
        iconAnchor: mapConfig.iconAnchor,
        popupAnchor: mapConfig.popupAnchor
    });

    jobMarkerData.forEach(marker => {
        const mapMarker = L.marker(marker.pos, {icon: jobMarkerIco}).addTo(map)
        .bindPopup(`
            <div class="popup-container">
                PopupBinding
            </div>
        `);

        const li = document.createElement('li');
        li.textContent = marker.name;
        li.addEventListener('click', () => {
            map.flyTo(marker.pos, 0, { animate: true, duration: 2 });
            mapMarker.openPopup();
        });

        document.getElementById('job-list').appendChild(li);
    });

}

function addMethMarkers() {

    const laboMarkerico = L.icon({
        iconUrl: 'img/dot/meth-dot.svg',
        iconSize: mapConfig.iconSize,
        iconAnchor: mapConfig.iconAnchor,
        popupAnchor: mapConfig.popupAnchor
    });

    methMarkerData.forEach(marker => {
        const mapMarker = L.marker(marker.pos, {icon: laboMarkerico}).addTo(map)
        .bindPopup(`
            <div class="popup-container">
                <h3>${marker.name}</h3>
                <p>${marker.img}</p>
                <p>Camera: ${marker.camera}</p>
                <p>Description: ${marker.description}</p>
            </div>
        `);

        const li = document.createElement('li');
        li.textContent = marker.name;
        li.addEventListener('click', () => {
            map.flyTo(marker.pos, 0, { animate: true, duration: 2 });
            mapMarker.openPopup();
        });

        document.getElementById('meth-list').appendChild(li);
    });
}

function addLaboMarkers() {

    const laboMarkerico = L.icon({
        iconUrl: 'img/dot/weed-dot.svg',
        iconSize: mapConfig.iconSize,
        iconAnchor: mapConfig.iconAnchor,
        popupAnchor: mapConfig.popupAnchor
    });

    laboMarkerData.forEach(marker => {
        const mapMarker = L.marker(marker.pos, {icon: laboMarkerico}).addTo(map)
        .bindPopup(`
            <div class="popup-container">
                <h3>${marker.name}</h3>
                <p>${marker.img}</p>
                <p>Camera: ${marker.camera}</p>
                <p>Nb Pots: ${marker.pots}</p>
                <p>Nb Presse: ${marker.presse}</p>
                <p>Description: ${marker.description}</p>
            </div>
        `);

        const li = document.createElement('li');
        li.textContent = marker.name;
        li.addEventListener('click', () => {
            map.flyTo(marker.pos, 0, { animate: true, duration: 2 });
            mapMarker.openPopup();
        });

        document.getElementById('labo-list').appendChild(li);
    });
}

function addDealMarkers() {

    const dealMarkerIco = L.icon({
        iconUrl: 'img/dot/deal-dot.svg',
        iconSize: mapConfig.iconSize,
        iconAnchor: mapConfig.iconAnchor,
        popupAnchor: mapConfig.popupAnchor
    });

    dealMarkerData.forEach(marker => {
        const mapMarker = L.marker(marker.pos, {icon: dealMarkerIco}).addTo(map)
        .bindPopup(`
            <div class="popup-container">
                <h3>${marker.name}</h3>
            </div>
        `);

        const li = document.createElement('li');
        li.textContent = marker.name;
        li.addEventListener('click', () => {
            map.flyTo(marker.pos, 0, { animate: true, duration: 2 });
            mapMarker.openPopup();
        });

        document.getElementById('deal-list').appendChild(li);
    });

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

