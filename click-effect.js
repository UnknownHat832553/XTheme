document.addEventListener("click", function (e) {
  let effect = document.createElement("div");
  effect.className = "click-effect";
  document.body.appendChild(effect);

  effect.style.left = `${e.clientX - 10}px`;
  effect.style.top = `${e.clientY - 10}px`;

  setTimeout(() => {
    effect.remove();
  }, 400);
});
