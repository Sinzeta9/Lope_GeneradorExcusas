window.onload = function () {
  const who   = ["The dog", "My grandmum", "A dragon", "The hamster"];
  const action= ["ate", "peed on", "crushed", "broke"];
  const what  = ["my phone", "the car", "my homework", "my Warhammers"];
  const when  = [
    "before the class",
    "during my lunch",
    "while I was sleeping",
    "while I was exercising",
  ];

  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const buildExcuse = () =>
    `${rnd(who)} ${rnd(action)} ${rnd(what)} ${rnd(when)}.`;

  const $excuse = document.querySelector("#excuse");
  const render = () => ($excuse.textContent = buildExcuse());

  render(); // al cargar
  document.querySelector("#regen").addEventListener("click", render); // al pulsar
};
