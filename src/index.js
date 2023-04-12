import './style.css';
// import getWeather from './controller/get-api';
import defaultPageBuild from './controller/build-page';

async function build() {
  const defaultPage = await defaultPageBuild();
  document.body.appendChild(defaultPage);

}
build()