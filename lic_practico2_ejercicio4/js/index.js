window.onload = alert("Taller Practico 02 – LIC");
const form = document.getElementById("form");
const errors = document.getElementById("errors");
const errBtn = document.getElementById("errBtn");
const value = document.getElementById("value");
const dest = document.getElementById("dest");
value.innerText = `$${dest.value.split(",")[1]}`;
const regexps = {
  nombre: {
    reg: /^\w+(\w|\s)+$/,
    message: "Ingrese un nombre válido",
  },
  sexo: {
    reg: /^([A-Z]|[a-z])+$/,
    message: "Ingrese un Sexo válido",
  },
  edad: {
    reg: /^[0-9]{1,2}$/,
    message: "Ingrese una edad válida",
  },
  direccion: {
    reg: /^\w(\w|\s|\W){5}(\w|\s|\W)+$/,
    message: "Ingrese una dirección válida",
  },
  dui: {
    reg: /^[0-9]{8}-[0-9]{1}$/,
    message: "Ingrese el DUI en formato: ########-#",
  },
  pasaporte: {
    reg: /^[A-Z]{1}[0-9]{8}$/,
    message: "Ingrese el pasaporte en formato: [A-Z]########",
  },
  correo: {
    reg: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    message: "Ingrese un correo electrónico válido",
  },
  inicio: {
    reg: /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/,
    message: "Ingrese una fecha de inicio válida",
  },
  fin: {
    reg: /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/,
    message: "Ingrese una fecha final válida",
  },
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  errors.innerHTML = "";
  for (var [key, value] of data) {
    if (regexps.hasOwnProperty(key)) {
      console.log(key, value, regexps[key].reg.test(value), regexps[key]);
      if (!regexps[key].reg.test(value))
        errors.innerHTML += `<div class="my-1"><span> <i class="fas fa-exclamation-triangle"></i> <strong>Error:</strong> <span class="text-white">${regexps[key].message}</span> </span></div>`;
      if (
        key === "dateend" &&
        new Date(value) - new Date(data.get("dateinit")) < 0
      )
        errors.innerHTML += `<div class="my-1"><span> <i class="fas fa-exclamation-triangle"></i> <strong>Error:</strong> <span class="text-white">La ficha final debe ser mayor a la inicial</span> </span></div>`;
    }
  }
  if (errors.innerHTML.length > 0) errBtn.classList.remove("d-none");
  else {
    errBtn.classList.add("d-none");
    window.location.href = `info.html?${new URLSearchParams(data).toString()}`;
    /*     setTimeout(() => {
      window.location.href = `info.html?${window.location.href.split("?")[1]}`;
    }, 1000); */
  }
});
errBtn.addEventListener("click", (e) => {
  e.preventDefault();
  errors.innerHTML = "";
  errBtn.classList.add("d-none");
});
dest.addEventListener("change", (e) => {
  value.innerText = `$${e.target.value.split(",")[1]}`;
});