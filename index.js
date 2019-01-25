
const cardHeights = []
const projectCards = document.querySelectorAll('.project-card')
let index = 0
projectCards.forEach(card=>{
    card.addEventListener('click', ()=>{
        let p = card.querySelectorAll('p')
        let h4 = card.querySelector('h4')
        h4.style.display = h4.style.display !== ''? '' : 'block'
        p.forEach(p=>p.style.display = p.style.display !== ''? '' : 'block')
    })
})