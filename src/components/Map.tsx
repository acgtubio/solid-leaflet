import L from "leaflet";
import 'leaflet/dist/leaflet.css'
import { LeafletConfig, LeafletConfigBuilder } from "./LeafletConfig";
import { Marker } from "./types/Marker";
import { onMount } from "solid-js";

function setupMap(config: LeafletConfig) {
	const map = L.map("leaflet-map").setView([51.505, -0.09], 13);

	L.tileLayer(config.TileProvider, {
		maxZoom: config.MaxZoom,
		attribution: `&copy; ${config.AttributionUrl}`
	}).addTo(map);

	return map;
}

function setupMarkers(map, markers: Marker[]) {
	for (const marker of markers) {
		L.marker(marker.latlng, marker.options).addTo(map);
	}
}

export default function LeafletMap(props) {
	const config: LeafletConfig = props.config || new LeafletConfigBuilder().build();
	const markers: Marker[] = props.markers || [];

	onMount(() => {
		const map = setupMap(config);
		setupMarkers(map, markers);
	});

	return (
		<div id="leaflet-map" class="w-full h-full">
		</div>
	);
}
