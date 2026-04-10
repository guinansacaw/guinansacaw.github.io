// menu.js
document.querySelectorAll('.menu ul li a').forEach(item => {
  item.addEventListener('click', () => {
      document.getElementById('men-u').checked = false;
  });
});



// Envio de mail

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_mbb6yyc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});