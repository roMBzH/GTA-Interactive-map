
function initLoading() {
    updateLoading("Début du chargement...", 0);
}

function updateLoading(stateText, percentValue) {
    const state = document.getElementById('state');
    const percent = document.getElementById('percent');
    const progressbar = document.getElementById('progressbar');

    state.textContent = stateText;
    percent.textContent = `${percentValue}%`;

    // Ajout de transition pour le pourcentage
    progressbar.style.width = `${percentValue}%`;
}

function markerDataLoaded() {
    updateLoading("Chargement des données des markers...", 5);
}

function onBeforeFinish() {
    updateLoading("Préparation des de tous les élements...", 85);
}

function onFinish() {
    updateLoading("Chargement terminée...", 100);
}