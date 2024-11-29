// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello :))', 'Welcome to our page', 'Have a Great day.'], 'text',['lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
function openModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
  
    // Handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      console.log('Form submitted:', { name, email, message });
  
      // Show the success message
      successMessage.style.display = 'block';
  
      // Reset the form after submission
      form.reset();
  
      // Hide the success message after 5 seconds
      setTimeout(function () {
        successMessage.style.display = 'none';
      }, 5000); // 5 seconds
    });
  });
  
  
  