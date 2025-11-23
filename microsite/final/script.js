document.addEventListener("DOMContentLoaded", () => {
  const burger   = document.querySelector(".burger");
  const navlinks = document.querySelector(".navlinks");

  if (!burger || !navlinks) return;

  burger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
  });

  navlinks.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      navlinks.classList.remove("open");
    }
  });
});
