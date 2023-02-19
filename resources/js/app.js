import "./bootstrap";
// import "./apexcharts";
import "./fonts/flag-icon-css/css/flag-icon.min.css";
// import 'svgmap/dist/svgMap.min.css';

import "flowbite";

// import "./charts";

import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;

Alpine.plugin(focus);
Alpine.plugin(persist);

Alpine.start();
