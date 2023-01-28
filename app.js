const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const ampm = document.querySelector(".ampm");

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "am";

  if (h > 12) {
    h = h - 12;
    ap = "pm";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;

  ampm.textContent = ap;

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();
