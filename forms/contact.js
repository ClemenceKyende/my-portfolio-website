document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation (optional)
  if (!name || !email || !subject || !message) {
    document.getElementById('responseMessage').innerText = 'All fields are required.';
    document.getElementById('responseMessage').className = 'error';
    return;
  }

  // Prepare data to be sent
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);

  // Send the data using Fetch API
  fetch('https://your-backend-api-or-email-service.com/send', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Assuming the server returns JSON
    })
    .then(data => {
      // Handle success
      document.getElementById('responseMessage').innerText = 'Your message has been sent successfully!';
      document.getElementById('responseMessage').className = 'success';
      document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
      document.getElementById('responseMessage').innerText = 'There was an error sending your message. Please try again.';
      document.getElementById('responseMessage').className = 'error';
    });
});
