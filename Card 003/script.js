const cardContainer = document.getElementById('card-container');
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    // Alterna a classe "flipped" no contêiner do cartão
    cardContainer.classList.toggle('flipped');
});
