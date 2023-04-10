import "./style.css";
import getWeather from "./controller/get-api";
import pageBuild from "./data/components";

getWeather("ogden");

document.body.appendChild(pageBuild());

