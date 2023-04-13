import './style.css';
import { buildStructures, defaultInfoBuild } from './controller/build-page';

document.getElementsByTagName(
  'META'
)[2].content = `http-equiv="Content-Security-Policy"   
     content="upgrade-insecure-requests"`;
document.body.appendChild(buildStructures());
defaultInfoBuild();
