import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(8080, () => console.log("Listening on port 8080!"));

app.get("/goodGames", function (req, res) {
  let goodGames = [
    { name: "Red Dead Redemption 2", platform: "PS4" },
    { name: "Escape From Tarkov", platform: "PC" },
    { name: "Halo 4", platform: "Xbox" },
    { name: "Animal Crossing", platform: "Nintendo Switch" },
  ];
  res.json(goodGames);
});
