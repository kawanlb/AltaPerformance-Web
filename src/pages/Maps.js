import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pinImage from '../assets/images/Logo.jpeg';

function Maps() {
    useEffect(() => {
        const map = L.map('map').setView([-8.0476, -34.8770], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const pinIcon = L.icon({
            iconUrl: pinImage,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        const storeLocations = [
            { lat: -8.052240, lng: -34.928609, name: 'Centro de Adoção 1', imageUrl: 'https://adotapet.recife.pe.gov.br/public/assets/static/cachorro-preto.png ', description: 'Centro de Adoção de pets 1.' },
            { lat: -8.048962, lng: -34.872928, name: 'Centro de Adoção 2', imageUrl: 'https://adotapet.recife.pe.gov.br/public/assets/static/cachorro-preto.png ' , description: 'Centro de Adoção de pets 2.'},
            { lat: -8.033841, lng: -34.916546, name: 'Centro de Adoção 3', imageUrl: 'https://adotapet.recife.pe.gov.br/public/assets/static/cachorro-preto.png', description: 'Centro de Adoção de pets 3.' },
        ];

        storeLocations.forEach(store => {
            L.marker([store.lat, store.lng], { icon: pinIcon })
                .addTo(map)
                .bindPopup(`
                    <b>${store.name}</b><br>
                    <img src="${store.imageUrl}" alt="${store.name}" width="200"><br>
                    ${store.description}
                `);
        });

        const adoptionCenter = {
            lat: -8.0575,
            lng: -34.8820,
            name: 'Centro de Adoção de Pets',
            imageUrl: 'https://adotapet.recife.pe.gov.br/public/assets/static/cachorro-preto.png',
            description: 'Centro de Adoção de Pets em Recife.'
        };

        L.marker([adoptionCenter.lat, adoptionCenter.lng], { icon: pinIcon })
            .addTo(map)
            .bindPopup(`
                <b>${adoptionCenter.name}</b><br>
                <img src="${adoptionCenter.imageUrl}" alt="${adoptionCenter.name}" width="200"><br>
                ${adoptionCenter.description}
            `);

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
}

export default Maps;
