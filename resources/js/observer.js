const logo = document.querySelector(".logo-top");
const masthead = document.querySelector("header");
const section = document.querySelector("section");

const options = {
  rootMargin: "-75px 0px 0px 0px"
};

const projectObserver = new IntersectionObserver(function(entries, options) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        logo.classList.add("logo-dark");
        logo.classList.remove("logo-light");

      } else {
        logo.classList.remove("logo-dark");
        logo.classList.add("logo-light");

      }
    });
  },
  options);

projectObserver.observe(masthead);

const aboutObserver = new IntersectionObserver(function(entries, options) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        logo.classList.add("logo-light");
        logo.classList.remove("logo-dark");
      } else {
        logo.classList.add("logo-dark");
        logo.classList.remove("logo-light");

      }
    });
  },
  options);

aboutObserver.observe(section);