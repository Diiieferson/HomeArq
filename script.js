const elemento = document.querySelector('nav')
const animationClass = 'animate'

function animaScroll(){
    const windowTop = window.pageYOffset

    if (windowTop > 5){
        console.log('maior que 5')
        elemento.classList.add(animationClass)
    }else{
        console.log('menor que 5')
        elemento.classList.remove(animationClass)
    }

}


window.addEventListener('scroll',()=> {
    animaScroll()    
} )