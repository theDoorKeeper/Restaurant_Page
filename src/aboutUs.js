import { createParagrpah } from './contactUs';

function createAboutUs(container) {
  container.innerHTML = '';
  const img = document.createElement('img');
  img.src = '../style/img.jpg';
  container.innerHTML = createParagrpah('Welcome to the best japanese restaurant in NY ');
  container.appendChild(img);
  container.innerHTML += createParagrpah('Gyoza and Ramen speciality , Delivery only due to covid ');
}

export default createAboutUs;
