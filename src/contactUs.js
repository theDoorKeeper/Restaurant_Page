function createContact(container){
    container.innerHTML=""; 

container.innerHTML+=createParagrpah("Our contact info:");
container.innerHTML+=createParagrpah("e-mail: example@hotmail.com ");
container.innerHTML+=createParagrpah("phone number : 0545896547 , 0215489644");
container.innerHTML+=createParagrpah("Adress:751 Green Hill Dr. Webster, NY 14580 ");
}

function createParagrpah(text){
   return `<p> ${text}<p>`
   }
   export {createContact}