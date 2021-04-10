 function createMenu(container){
    container.innerHTML="";
    const grid = document.createElement("div");
    grid.setAttribute("id","grid");
    container.appendChild(grid);
    let i=0 ;
    for(i=1; i<7;i++){
         grid.innerHTML+=`<div class="menu${i} square"></div>`
    }

}

export {createMenu} 