let addButton = document.querySelector("#btn");

let count = 0;
addButton.addEventListener('click',()=>{
    count = count + 1;
    addButton.innerHTML = count
})
