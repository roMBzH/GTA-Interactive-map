

function toggleFilter(markerName) {
    if (markerName === "vendor") {
        document.getElementById('toggleVendor').addEventListener('change', function() {
            if (this.checked) {
                vendorLayer.addTo(map);
            } else {
                map.removeLayer(vendorLayer);
            }
        })
    } else if (markerName === "job") {
        document.getElementById('toggleJob').addEventListener('change', function() {
            if (this.checked) {
                jobLayer.addTo(map);
            } else {
                map.removeLayer(jobLayer);
            }
        });
    } else if (markerName === "weed") {
        document.getElementById('toggleWeed').addEventListener('change', function() {
            if (this.checked) {
                weedLayer.addTo(map);
            } else {
                map.removeLayer(weedLayer);
            }
        });
    } else if (markerName === "meth") {
        document.getElementById('toggleMeth').addEventListener('change', function() {
            if (this.checked) {
                methLayer.addTo(map);
            } else {
                map.removeLayer(methLayer);
            }
        });
    } else if (markerName === "deal") {
        document.getElementById('toggleDeal').addEventListener('change', function() {
            if (this.checked) {
                dealLayer.addTo(map);
            } else {
                map.removeLayer(dealLayer);
            }
        })
    } else {
        console.log("Error nom de marqueur inconnu.")
    }
}