import './style.css';
// import getWeather from './controller/get-api';
import { defaultPageBuild } from './controller/build-page';

async function defaultBuild() {
  const defaultPage = await defaultPageBuild('amer');
  document.body.appendChild(defaultPage);
}

defaultBuild();
