const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle Menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Scroll to Section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  navLinks.classList.remove("open"); // close menu after click
}



///////////////////////////////////
const roles = ["Frontend Developer", "React Enthusiast", "Web Designer"]; // 👈 yaha apna text daalo
  let roleIndex = 0;
  let charIndex = 0;
  const typingText = document.getElementById("typing-text");

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // typing speed
    } else {
      setTimeout(erase, 2000); // wait before erase
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // erase speed
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 500); // typing delay
    }
  }

  // Start typing when page loads
  document.addEventListener("DOMContentLoaded", function () {
    type();
  });

//   /////////contact


const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("Email");
const subjectInput = document.getElementById("L-name");
const messageInput = document.getElementById("message");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("lastNameError");
const messageError = document.getElementById("numberError");

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop default submit

  let valid = true;

  // Name validation
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
    valid = false;
  } else nameError.textContent = "";

  // Email validation
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  } else emailError.textContent = "";

  // Subject validation
  if (subjectInput.value.trim().length < 3) {
    subjectError.textContent = "Subject must be at least 3 characters";
    valid = false;
  } else subjectError.textContent = "";

  // Message validation
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    valid = false;
  } else messageError.textContent = "";

  // ✅ Stop execution if invalid
  if (!valid) return;

  // ✅ All validations passed, send email
  sendMail();
});

function sendMail() {
  const parms = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    subject: subjectInput.value.trim(),
    message: messageInput.value.trim()
  };

  emailjs.send("service_9wdfc8w", "template_ufqnoo5", parms)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("successMessage").textContent = "Form submitted successfully, I will reach you soon";
      form.reset();
      setTimeout(() => {
        document.getElementById("successMessage").textContent = "";
      }, 3000);
    })
    .catch(function(error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Try again.");
    });
}


