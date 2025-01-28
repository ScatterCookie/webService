const app = document.getElementById("app");
const API_URL = "https://webservice-1-fiqk.onrender.com";

//fetch from the server

async function getGoodGames() {
  const response = await fetch("http://localhost:8080/goodGames");
  const data = await response.json();
  console.log(data);

  data.forEach((game) => {
    const p = document.createElement("p");
    p.textContent = `${game.name}`;
    app.appendChild(p);
  });
}

getGoodGames();

//put fetch info onto page
