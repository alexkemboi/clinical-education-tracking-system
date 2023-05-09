const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clinicaleducationtrackingsystem",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database", error);
  } else {
    console.log("Connected to database");
  }
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const { firstName, secondName, email, password } = req.body;

  const query = `INSERT INTO users (firstName,secondName,email,password)
                VALUES (?, ?, ?, ?)`;

  connection.query(
    query,
    [firstName, secondName, email, password],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "Failed to insert user data" });
      } else {
        res.status(200).json({ message: "User data inserted successfully" });
      }
    }
  );
});
app.post("/personalInformation", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, dob, gender, address, phoneNumber, email } =
    req.body;
  console.log(req.body);
  const query = `INSERT INTO personal_information (firstName, secondName,dob,gender,address,phone_number, email )
                VALUES (?, ?, ?, ?,?,?,?)`;

  connection.query(
    query,
    [firstName, lastName, dob, gender, address, phoneNumber, email],
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Failed to insert user personal information data" });
      } else {
        res
          .status(200)
          .json({ message: "Personal data inserted successfully" });
      }
    }
  );
});

app.post("/educationalInformation", (req, res) => {
  console.log(req.body);
  const { insitutionName, degree, fieldStudy, startDate, endDate } = req.body;
  console.log(req.body);
  const query = `INSERT INTO personal_information (institution_name,degree,field_of_study,start_date,end_date)
                VALUES (?, ?, ?, ?,?)`;

  connection.query(
    query,
    [insitutionName, degree, fieldStudy, startDate, endDate],
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Failed to insert user personal information data" });
      } else {
        res
          .status(200)
          .json({ message: "Personal data inserted successfully" });
      }
    }
  );
});

app.get("/usersDetails", (req, res) => {
  const query =
    "SELECT firstName, secondName, email,password FROM users WHERE email=? AND password=?";
  const email = req.query.email;
  const password = req.query.password; // Assuming you will pass the user id as a query parameter
  console.log(email);
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to fetch user details" });
    } else {
      console.log(results);
      res.status(200).json(results); // Assuming you want to return only the first row
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
