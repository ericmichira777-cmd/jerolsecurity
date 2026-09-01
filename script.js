
const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

//contact form
/*const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.querySelector("#form-msg");
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (!name || !phone) {
      msg.textContent = "Please enter your name and phone number.";
      return;
    }
    msg.textContent = `Thank you ${name}. Our team will contact you on ${phone} shortly.`;
    form.reset();
  });
}*/



const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
