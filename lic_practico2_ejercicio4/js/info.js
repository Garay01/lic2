const data = new URLSearchParams(window.location.search);
const params = Object.fromEntries(data.entries());
const columns = document.getElementById("columns");
const values = document.getElementById("values");
let row = "<tr>";
Object.keys(params).forEach((key) => {
  row += `<th>${key.toUpperCase()}</th>`;
  if (key === "destino") row += `<th>Precio</th>`;
});

row += `<th>Cantidad de días</th>`;
row += "</tr>";
columns.innerHTML = row;
let row2 = "<tr>";
Object.values(params).forEach((value, index) => {
  if (index === 7) {
    row2 += `<td>${value.split(",")[0]}</td>`;
    row2 += `<td>$${value.split(",")[1]}</td>`;
  } else row2 += `<td>${value}</td>`;
});
console.log(params.fin, params.inicio);
const diffTime = Math.abs(new Date(params.fin) - new Date(params.inicio));
row2 += `<td>${Math.ceil(diffTime / (1000 * 60 * 60 * 24))}</td>`;
row2 += "</tr>";
values.innerHTML = row2;