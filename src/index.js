import "./style.css";
import getWeather from "./controller/get-api";
import defaultPageBuild from "./controller/build-page";

getWeather("ogden");
defaultPageBuild();

