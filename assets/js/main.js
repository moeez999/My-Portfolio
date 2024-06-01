const showMenu = (e, t) => {
  let l = document.getElementById(e),
    n = document.getElementById(t);
  l &&
    n &&
    l.addEventListener("click", () => {
      n.classList.toggle("show");
    });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  let e = document.getElementById("nav-menu");
  e.classList.remove("show");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
const sections = document.querySelectorAll("section[id]"),
  scrollActive = () => {
    let e = window.scrollY;
    sections.forEach((t) => {
      let l = t.offsetHeight,
        n = t.offsetTop - 58,
        s = t.getAttribute("id"),
        i = document.querySelector(".nav__menu a[href*=" + s + "]");
      e > n && e <= n + l
        ? i.classList.add("active-link")
        : i.classList.remove("active-link");
    });
  };
window.addEventListener("scroll", scrollActive);
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2e3,
  delay: 200,
});
function sendEmail() {
  let e = document.getElementById("name").value,
    t = document.getElementById("email").value,
    l = document.getElementById("message").value;
  emailjs
    .send("service_ycxhowt", "template_idmqyfy", {
      from_name: e,
      from_email: t,
      message: l,
    })
    .then(
      function (e) {
        console.log("Email sent successfully!", e),
          alert("Email sent successfully!"),
          (document.getElementById("name").value = ""),
          (document.getElementById("email").value = ""),
          (document.getElementById("message").value = "");
      },
      function (e) {
        console.error("Email failed to send:", e),
          alert("Email failed to send. Please try again later.");
      }
    );
}
sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {}),
  sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
    delay: 400,
  }),
  sr.reveal(".home__social-icon", { interval: 200 }),
  sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 }),
  emailjs.init("NhGXFRrjEkFNDXCfC"),
  window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
const tl = gsap
  .timeline({ repeat: 100, repeatDelay: 1 })
  .from(".mask div", {
    xPercent: gsap.utils.wrap([100, -100]),
    stagger: 0.4,
    opacity: 0,
    ease: "circ.inOut",
  })
  .to(
    ".mask div",
    {
      opacity: 0,
      yPercent: gsap.utils.wrap([-100, 100]),
      duration: 1,
      ease: "none",
    },
    ">0.5"
  );

gsap.fromTo(
  ".bar",
  { x: -200 },
  { x: 200, duration: 20, ease: "none", repeat: 3, yoyo: true }
);
// start learning GreenSock for free
// https://www.creativeCodingClub.com
