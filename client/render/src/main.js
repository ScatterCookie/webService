const app = document.getElementById("app");

//fetch from the server

async function getGoodGames() {
  const response = await fetch("http://localhost:8080/games");

  const data = response.json();
  console.log(data);
}

getGoodGames();

//put fetch info onto page
