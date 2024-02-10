/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //serviceId - templateId - #form -publicKey
    emailjs.sendForm('service_pq09qg7', 'template_5zetpn9', '#contact-form', 'PqJLeJErKDMByV0QK')
        .then(()=>{
            contactMessage.textContent = 'Message sent Successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000 )

            //clear input fields
            contactForm.reset()
        }, () => {
            //error message
            contactMessage.textContent = 'Message not sent (service error)❌'
        })
}

contactForm.addEventListener('submit', sendEmail)