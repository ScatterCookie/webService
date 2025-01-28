import express, { response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

let goodGames = [
  { name: "Red Dead Redemption 2", platform: "PS4" },
  { name: "Escape From Tarkov", platform: "PC" },
  { name: "Halo 4", platform: "Xbox" },
  { name: "Animal Crossing", platform: "Nintendo Switch" },
];

app.get("/", (req, res) => {
  response.json("its working!");
});

app.listen(8080, () => console.log("Listening on port 8080!"));
