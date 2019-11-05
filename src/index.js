import _ from 'lodash';
import './css/style.css';
import Icon from './img/mira.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  //add the image t our exsiting div
  const logo = new Image();
  logo.src = Icon;
  element.appendChild(logo);
  return element;
}

document.body.appendChild(component());