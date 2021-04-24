function createHeader(content) {
  const header = document.createElement('header');
  content.appendChild(header);

  const sign = document.createElement('div');
  sign.className = 'sign';
  header.appendChild(sign);
  sign.innerHTML = '<span class="fast-flicker">日本</span>語 Nih<span class="flicker">on</span>go';
}

function createNavbar(content) {
  const navbBar = document.createElement('nav');
  navbBar.setAttribute('class', 'menu-bar');
  content.appendChild(navbBar);

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'wrapper');
  navbBar.appendChild(wrapper);

  const tabOne = document.createElement('a');
  const tabTwo = document.createElement('a');
  const tabThree = document.createElement('a');

  tabOne.setAttribute('class', 'item');
  tabOne.setAttribute('id', 'tab1');

  tabTwo.setAttribute('class', 'item');
  tabTwo.setAttribute('id', 'tab2');

  tabThree.setAttribute('class', 'item');
  tabThree.setAttribute('id', 'tab3');

  tabOne.textContent = 'Home';
  tabTwo.textContent = 'Menu';
  tabThree.textContent = 'Contact US';

  wrapper.appendChild(tabOne);
  wrapper.appendChild(tabTwo);
  wrapper.append(tabThree);
}

function createCard(content) {
  const card = document.createElement('div');
  card.setAttribute('id', 'card');
  content.appendChild(card);

  const container = document.createElement('div');
  container.classList.add('container');
  card.appendChild(container);
  return { container };
}

export { createHeader, createNavbar, createCard };
