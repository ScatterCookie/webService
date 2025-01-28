const app = document.getElementById("app");

//fetch from the server

async function getGoodGames() {
  const baseUrl = "https://webservice-1-fiqk.onrender.com";
  const response = await fetch(`${baseUrl}/games`);

  const data = response.json();
  console.log(response.json());
}

getGoodGames();

//put fetch info onto page
