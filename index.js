// overlay and side bar functioning

const sidebar = document.querySelector(".side-bar");
const overlay = document.querySelector(".overlay");
function toggleMenu() {
  overlay.classList.toggle("show");
  sidebar.classList.toggle("open");
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}
// theme chnage functioning

const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("moon-toggle");
});

//  menu options class toggling to clicked

document.addEventListener("DOMContentLoaded", function () {
  const clickedItems = document.querySelectorAll(".side-bar ul li a");

  function handleNavigation() {
    clickedItems.forEach((el) => el.classList.remove("clicked"));
    this.classList.add("clicked");

    sidebar.classList.remove("open");
    overlay.classList.remove("show");

    const targetSection = this.getAttribute("href");
    window.location.hash = targetSection;
  }

  // Add click and touchend events
  clickedItems.forEach((item) => {
    item.addEventListener("click", handleNavigation);
    item.addEventListener("touchend", handleNavigation);
  });
});

// for profile icon

const pfpopen = document.querySelector("body .pfp");
function pfp_open() {
  pfpopen.classList.toggle("pfp-opened");
  const pfpopened = document.querySelector("body .pfp-opened");
  pfpopened.addEventListener("click", () => {
    pfpopen.classList.remove("pfp-opened");
  });
}

// to reset form after submission

const form = document.getElementById("contactform");
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset(); 
    } else {
      alert("Failed to message, Please try again.");
    }
  } catch (error) {
    alert("Error occured : " + error.message);
  }
});

// for menu options changing class dynamically
//... to be added
