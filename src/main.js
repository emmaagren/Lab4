import './styles/main.scss';

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click' , () => {
        card.classList.add('pulse')
        setTimeout(() => {
            card.classList.remove('pulse')
        }, 600)
    })
})