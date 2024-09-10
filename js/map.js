function initMap() {
    var location = { lat: -5.355809, lng: -49.136961 }; // Coordenadas do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Bem Viver'
    });
}

// Carregar a API do Google Maps
function loadGoogleMapsAPI() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB-1XgP2bX-1Z6X-1Z1RZ-1Z1Z1Z-1Z1Z1Z-1Z1Z1Z&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Carregar o Google Maps quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', loadGoogleMapsAPI);
