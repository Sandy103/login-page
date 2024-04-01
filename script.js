const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  if (username === 'sachin' && password === 'sachin@123') {
    message.textContent = 'Login successful!';
    message.style.color = 'green';
    // You can redirect the user to another page here
  } else {
    message.textContent = 'Invalid username or password.';
    message.style.color = 'red';
  }
});
