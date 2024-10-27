const shareButton = document.querySelector('.share_btn');
const hiddenCard = document.querySelector('.hidden_card');


const DisplayCard = () => {
    shareButton.addEventListener('click', () => {
        hiddenCard.classList.toggle('popup');
    });
}

DisplayCard();