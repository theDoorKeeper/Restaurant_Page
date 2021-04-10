
 function createHeader(content){ 
const header = document.createElement("header");
header.textContent="日本語 Nihongo";
content.appendChild(header);
}


function createNavbar(content){ 
const tabsy = document.createElement("div");
tabsy.setAttribute("class", "tabsy");
content.appendChild(tabsy);

const inputOne = document.createElement("input");
const labelOne = document.createElement("label");
inputOne.setAttribute("type","radio");
inputOne.setAttribute("id","tab1");
inputOne.setAttribute("name","tab");
labelOne.classList.add("tabButton");
labelOne.setAttribute("for","tab1");
labelOne.textContent="About Us";
tabsy.appendChild(inputOne);
tabsy.appendChild(labelOne);


const inputTwo = document.createElement("input");
const labelTwo = document.createElement("label");
inputTwo.setAttribute("type","radio");
inputTwo.setAttribute("id","tab2");
inputTwo.setAttribute("name","tab");
labelTwo.classList.add("tabButton");
labelTwo.setAttribute("for","tab2");
labelTwo.textContent="Menu";
tabsy.appendChild(inputTwo);
tabsy.appendChild(labelTwo);

const inputThree = document.createElement("input");
const labelThree = document.createElement("label");
inputThree.setAttribute("type","radio");
inputThree.setAttribute("id","tab3");
inputThree.setAttribute("name","tab");
labelThree.classList.add("tabButton");
labelThree.setAttribute("for","tab3");
labelThree.textContent="Contact Us";
tabsy.appendChild(inputThree);
tabsy.appendChild(labelThree); 
}

 function createCard(content) { 
const card = document.createElement("div");
card.setAttribute("id","card")
content.appendChild(card);

const container = document.createElement("div");
container.classList.add("container")
card.appendChild(container)
return {container}
}
 
export {createHeader,createNavbar,createCard}