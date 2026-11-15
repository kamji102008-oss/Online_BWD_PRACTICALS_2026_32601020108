document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const output = document.getElementById("formMessage");
      if (!name || !email || !message) {
        output.textContent = "Please fill in all fields.";
        output.className = "mt-3 text-danger";
      } else {
        output.textContent = "Thank you, " + name + "! Your enquiry has been recorded in this demo.";
        output.className = "mt-3 text-success";
        form.reset();
      }
    });
  }
});
