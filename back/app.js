const express = require("express");
const mysql = require("mysql2/promise");
const algorithm = require("./algorithm");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/survey1", async (req, res) => {
  const data = req.body;
  const algorithmData = algorithm(data);

  const db = await mysql.createConnection({
    server: "localhost",
    user: "root",
    password: "",
    database: "survey_db",
  });

  const firstActivity = algorithmData[0].activity;
  const secondActivity = algorithmData[1].activity;

  try {
    const [activity1, fields1] = await db.execute(
      `SELECT activities.activity, activities.location, cities.city_name FROM activities INNER JOIN cities ON activities.city_id = cities.id WHERE city_id = ${data.location} && activities.activity LIKE '${firstActivity}'`
    );
    const [activity2, fields2] = await db.execute(
      `SELECT activities.activity, activities.location, cities.city_name FROM activities INNER JOIN cities ON activities.city_id = cities.id WHERE city_id = ${data.location} && activities.activity LIKE '${secondActivity}'`
    );
    return res.status(200).send({
      data: [...activity1, ...activity2],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
