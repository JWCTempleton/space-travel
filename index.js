const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  //   if data-visibility is false, set to true on click, else set to false on click
  visibility === "false"
    ? nav.setAttribute("data-visible", true)
    : nav.setAttribute("data-visible", false);
});
