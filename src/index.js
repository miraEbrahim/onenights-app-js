import _ from 'lodash';
import printMe from './print.js'
import Logo from './img/onenight-logo.png';
import './css/style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to works
  element.innerHTML = _.join(['oneNights', 'Starter Pack'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  //add the image t our exsiting div
  const logo = new Image();
  logo.src = Logo;
  element.appendChild(logo);


  return element;


}

document.body.appendChild(component());