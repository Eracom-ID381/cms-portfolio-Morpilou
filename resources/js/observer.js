const logo = document.querySelector(".logo-top");
const masthead = document.querySelector(".masthead");

const options = {
  rootMargin: "-75px 0px 0px 0px"
};

const projectObserver = new IntersectionObserver(function(entries, options) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        logo.classList.replace("logo-light", "logo-dark");

      } else {
        logo.classList.replace("logo-dark", "logo-light");

      }
    });
  },
  options);

projectObserver.observe(masthead);