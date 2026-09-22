const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
