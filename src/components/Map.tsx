import L from "leaflet";
import { onMount } from "solid-js";
import 'leaflet/dist/leaflet.css'
import { LeafletConfig, LeafletConfigBuilder } from "./LeafletConfig";
import { MarkerIcon } from "./markers/Icon";

function setupMap(config: LeafletConfig) {
	const map = L.map("leaflet-map").setView([51.505, -0.09], 13);

	L.tileLayer(config.TileProvider, {
		maxZoom: config.MaxZoom,
		attribution: `&copy; ${config.AttributionUrl}`
	}).addTo(map);

	map.on("click", (e) => {
		console.group("Map is clicked");
		console.info(e);
		console.groupEnd();
	})

	const icon = MarkerIcon({
		iconUrl: "../src/assets/icons/home.png",
	});
	console.log(icon);

	L.marker([51.5, -0.09], { icon: icon }).addTo(map)
}

export default function LeafletMap(props) {
	const config: LeafletConfig = props.config || new LeafletConfigBuilder().build();

	onMount(() => {
		setupMap(config);
	});

	return (
		<div id="leaflet-map" class="w-full h-full">
		</div>
	);
}
