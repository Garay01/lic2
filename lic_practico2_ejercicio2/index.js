window.onload = alert('Taller Practico 02 – LIC');

function tempLoad() {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb;";

  setTimeout(function() {
    temp.innerHTML = "&#xf2ca;";
  }, 1000);
  setTimeout(function() {
    temp.innerHTML = "&#xf2c9;";
  }, 2000);
  setTimeout(function() {
    temp.innerHTML = "&#xf2c8;";
  }, 3000);
  setTimeout(function() {
    temp.innerHTML = "&#xf2c7;";
  }, 4000);
}

tempLoad();

setInterval(tempLoad, 5000);

document.getElementById("farInput").addEventListener("input", function(e) {
  let far = e.target.value;

  document.getElementById("farToCel").innerHTML = (
    (5 / 9) *
    (far * 1 - 32)
  ).toFixed(2);

  document.getElementById("farToKel").innerHTML = (
    (5 / 9) *
    (far * 1 + 459.67)
  ).toFixed(2);
});

document.getElementById("celInput").addEventListener("input", function(e) {
  let cel = e.target.value;

  document.getElementById("celToFar").innerHTML = (cel * 1.8 + 32).toFixed(2);

  document.getElementById("celToKel").innerHTML = (cel * 1 + 273.15).toFixed(2);
});

document.getElementById("kelInput").addEventListener("input", function(e) {
  let kel = e.target.value;

  document.getElementById("kelToFar").innerHTML = (
    1.8 * (kel * 1 - 273) +
    32
  ).toFixed(2);

  document.getElementById("kelToCel").innerHTML = (kel * 1 - 273.15).toFixed(2);
});
