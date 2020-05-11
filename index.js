const pushFullName = document.querySelector('.full-name');
const pressButton = document.querySelector('.btn');
 
pressButton.addEventListener('click', uppercase);
 
function uppercase() {
    pushFullName.value = pushFullName.value.toUpperCase();
}