
// const cardHeights = []
// const projectCards = document.querySelectorAll('.project-card')
// let index = 0
// projectCards.forEach(card=>{
//     card.addEventListener('click', ()=>{
//         let p = card.querySelectorAll('p')
//         let h4 = card.querySelector('h4')
//         h4.style.display = h4.style.display !== ''? '' : 'block'
//         p.forEach(p=>p.style.display = p.style.display !== ''? '' : 'block')
//     })
// })


// let links = document.querySelectorAll(".topbar-item")

// // const checkWindow = (event) =>{
// // //    event.preventDefault()
// //     console.log(window.innerWidth)
// //     return window.innerWidth<=768 && links.forEach(i=>
// //         i.innerText = i.innerText[0]    
// //     )
// // }

// document.addEventListener('resize', checkWindow = (event) =>
// {
//     //    event.preventDefault()
//         console.log(window.innerWidth)
//         return window.innerWidth<=768 && links.forEach(i=>
//             i.innerText = i.innerText[0]    
//         )
//     }
    

// ) 

// checkWindow()

let p = document.querySelector('#stack')

document.addEventListener('',event=>{
    if( event.target.name="react"){
        p.innerText="Hello"
    }
})