import './styles.css';
import beachImage from './assets/beach3.jpg';

const greet = (name: string): void => {
  document.body.innerHTML = `<h2>Hello, ${name}!</h2>`;
};

greet('Webpack + TypeScript Training');

const img = document.createElement('img');
img.src = beachImage;
img.alt = "Optimized Image";
img.width = 300;
document.body.appendChild(img);