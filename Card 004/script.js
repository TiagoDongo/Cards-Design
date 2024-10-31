function toggleCard() {
    const frontCard = document.querySelector('.front-card');
    const backCard = document.querySelector('.back-card');
    
    if (frontCard.style.display !== 'none') {
        frontCard.classList.add('magictime', 'slideUp'); // Animação de saída
        backCard.classList.remove('magictime', 'slideDown'); // Reseta a animação da parte de trás

        setTimeout(() => {
            frontCard.style.display = 'none';
            backCard.style.display = 'block';
            backCard.classList.add('magictime', 'slideDown'); // Animação de entrada da parte de trás
        }, 500); // Ajuste o tempo para a duração da animação
    } else {
        backCard.classList.add('magictime', 'slideUp'); // Animação de saída
        frontCard.classList.remove('magictime', 'slideDown'); // Reseta a animação da frente

        setTimeout(() => {
            backCard.style.display = 'none';
            frontCard.style.display = 'block';
            frontCard.classList.add('magictime', 'slideDown'); // Animação de entrada da frente
        }, 500); // Ajuste o tempo para a duração da animação
    }
}
