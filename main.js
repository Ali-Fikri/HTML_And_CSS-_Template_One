const navToggler = document.querySelector(".toggler .icon");
const navLinks = document.querySelector(".nav-links");

const handleClick = (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("show");
  // Remove show Class on click anywhere else
  document.addEventListener("click", (e) => {
    if (e.target !== navLinks) navLinks.classList.remove("show");
  });
};

navToggler.addEventListener("click", handleClick);
