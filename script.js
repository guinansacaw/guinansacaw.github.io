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


// traducciones

document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('lang-selector');

  // Load translations for the selected language
  const loadTranslations = (lang) => {
      fetch(`translations/${lang}.json`)
          .then(response => response.json())
          .then(translations => applyTranslations(translations))
          .catch(error => console.error('Error loading translations:', error));
  };

  // Apply translations to the DOM elements
  const applyTranslations = (translations) => {
      document.querySelectorAll('[data-translate]').forEach((element) => {
          const key = element.getAttribute('data-translate');
          if (translations[key]) {
              element.innerHTML = translations[key];
          }
      });
  };

  // Event listener for language selection
  langSelector.addEventListener('change', (event) => {
      const selectedLang = event.target.value;
      loadTranslations(selectedLang);
  });

  // Initial load with default language
  const defaultLang = 'en';
  loadTranslations(defaultLang);
});
