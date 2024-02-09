/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
modalButton = document.querySelectorAll('.services__button'),
modalClose = document.querySelectorAll('.services__modal-close')
let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')

}
modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modal.forEach((modalRemove) =>{
            modalRemove.classList.remove('active-modal')
        })
    })
})


    
    
    



/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
