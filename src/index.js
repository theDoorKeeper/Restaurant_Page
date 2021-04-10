 import {createCard,createHeader,createNavbar} from "./pageLoader"; 
 import {createAboutUs} from "./aboutUs";
 import {createMenu} from "./Menu";
 import {contactUs, createContact} from "./contactUs";
const content = document.querySelector("#content");
 createHeader(content);
 createNavbar(content);
 createCard(content);
const tab1=document.querySelector("#tab1");
const tab2=document.querySelector("#tab2");
const tab3=document.querySelector("#tab3");
const container=document.querySelector(".container");




(function() {
    tab1.addEventListener("click",e=>createAboutUs(container))
  })();
 
 

(function() {
    tab2.addEventListener("click",e=>createMenu(container))
  })();

  (function() {
    tab3.addEventListener("click",e=>createContact(container))
  })();



