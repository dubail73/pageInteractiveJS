const footer = document.querySelector('footer');
let compteur = 0;

footer.addEventListener("click", function() {
    compteur++;
    console.log(`Clic numéro ${compteur}`);
    
});


const toggleButton = document.querySelector('.navbar-toggler'); 
const navbarHeader = document.querySelector('#navbarHeader'); 


toggleButton.addEventListener("click", function() {
    navbarHeader.classList.toggle("collapse");
});


const firstCard = document.querySelector('.card');
const btnEdit = document.querySelector('.btn.btn-sm.btn-outline-secondary');

btnEdit.addEventListener("click", function() {
  
  const cardText = firstCard.querySelector('.card-text');
  cardText.style.color = 'red';
});


const secondCard = document.querySelectorAll('.card')[1]; 
const btnEditSecondCard = secondCard.querySelector('.btn-outline-secondary'); 


btnEditSecondCard.addEventListener("click", function() {
    
    if (secondCard.style.color === 'green') {
        secondCard.style.color = ''; // Réinitialise la couleur
    } else {
        secondCard.style.color = 'green'; 
    }
});


const navbar = document.querySelector('.navbar');
const bootstrapLink = document.querySelector('link[rel="stylesheet"]');

navbar.addEventListener('dblclick', function() {
    bootstrapLink.disabled = !bootstrapLink.disabled;
});


const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    const viewButton = card.querySelector('.btn-success'); 
    const cardText = card.querySelector('.card-text'); 
    const cardImg = card.querySelector('.card-img-top'); 

    viewButton.addEventListener('mouseover', function () {
        if (cardText.style.display === 'none') {
            cardText.style.display = '';
            cardImg.style.width = '';
        } else {
            cardText.style.display = 'none';
            cardImg.style.width = '20%';
        }
    });
});


