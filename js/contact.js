const contactForm = document.getElementById('contact-form'), contact_message = document.getElementById('contact-message');
console.log(contactForm, contact_message);

const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_dtazzom','template_d88vslf','#contact-form','5K_XdaEQHd7ydcg5g')
    .then(() => {
        contact_message.innerHTML = "Message sent successfully!";
        contact_message.style.color = "#00ff00";
        setTimeout(() => {
            contact_message.innerHTML = "";
        }, 5000);
        contactForm.reset();
    })
}

contactForm.addEventListener('submit', sendMail);