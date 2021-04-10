function createAboutUs(container){
     container.innerHTML=""; 
    let img = document.createElement("img");
img.src="../style/img.jpg";
container.innerHTML=createParagrpah("Welcome to the best japanese restaurant in NY ");
container.appendChild(img);
container.innerHTML+=createParagrpah("Gyoza and Ramen speciality , Delivery only due to covid ");
}

function createParagrpah(text){
    return `<p> ${text}<p>`
    }
export {createAboutUs}