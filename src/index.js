import './style.css';
import {
  buildStructures,
  defaultInfoBuild,
  keyboardListen,
} from './controller/build-page';

document.body.appendChild(buildStructures());
defaultInfoBuild();
keyboardListen();
