let root = document.documentElement;

// zjistíme jak se pohybuje myš + uložíme si to do css proměnných
root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});
