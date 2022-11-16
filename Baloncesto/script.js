const basketAPI = "https://www.balldontlie.io/api/v1/teams";
const sectionNBA = document.getElementById("NBA");
const selectTeams = document.getElementById("teams");
const btnSelec = document.getElementById("btnTeams");
async function getTeams() {
  let response = await fetch(`${basketAPI}`)
  let dataTeams = await response.json();
  fillTeams(dataTeams);
}

const fillTeams = dataTeams => {
  dataTeams.data.forEach((team, index) => {
    let opcion = document.createElement("option");
    let teamName = team.name;
    opcion.value = teamName;
    opcion.textContent = teamName;
    opcion.id = index + 1;
    selectTeams.appendChild(opcion);
  });
}
btnSelec.addEventListener("click", async () => {
  sectionNBA.innerHTML = "";
  let response = await fetch(`${basketAPI}`)
  let dataTeams = await response.json();
  dataTeams.data.forEach(team => {
    if (team.name === selectTeams.value) {
      console.log(`Abreviación de ${team.full_name} : ${team.abbreviation}`)
      sectionNBA.innerHTML = "";
      drawCard(team);
    }
  })

});

const drawCard = team => {
  let card = document.createElement("div");
  let datos = document.createElement("h2");
  datos.innerText = "Datos:";
  card.appendChild(datos);

  let full_name = document.createElement("p");
  full_name.innerText = `Nombre Completo: ${team.full_name}`;
  card.appendChild(full_name);

  let nombre = document.createElement("p");
  nombre.innerText = `Nombre: ${team.name}`
  card.appendChild(nombre);

  let abreviatura = document.createElement("p");
  abreviatura.innerText = "Abreviatura: " + team.abbreviation;
  card.appendChild(abreviatura);

  let ciudad = document.createElement("p");
  ciudad.innerText = `Ciudad: ${team.city}`;
  card.appendChild(ciudad);

  let division = document.createElement("p");
  division.innerText = `División: ${team.division}`;
  card.appendChild(division);
  card.classList.add("card");
  sectionNBA.appendChild(card);
}
getTeams();
