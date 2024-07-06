const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((counterEl) => {
  counterEl.innerHTML = "0";
  increment();
  function increment() {
    let currentNam = +counterEl.innerHTML;
    let maxnumber = counterEl.getAttribute("maxnumber");
    let incrementnumber = maxnumber / 15;
    currentNam = Math.floor(currentNam + incrementnumber);
    counterEl.innerHTML = currentNam;
    if (currentNam < maxnumber) {
      setTimeout(increment, 100);
    } else {
      counterEl.innerHTML = maxnumber;
    }
  }
});
