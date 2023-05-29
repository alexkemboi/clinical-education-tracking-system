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

// Set your app credentials
const credentials = {
  apiKey: "6c30b78bdcc04f80b5e426ee276efa72b5cef23a1463a56d40caed01876ff5ad",
  username: "alexkemboi97",
};
// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage(message, phone) {
  const options = {
    // Set the numbers you want to send to in international format
    to: [`${phone}`],
    // Set your message
    message: `${message}`,
    //message:'Hi Collins ,this is a sample text.Thank You.',
    // Set your shortCode or senderId
    //from: "XXYYZZ",
  };
  // That’s it, hit send and we’ll take care of the rest
  sms.send(options).then(console.log).catch(console.log);
}

app.post("/SendSms", (req, res) => {
  console.log(req.body);
  sendMessage(req.body.message, req.body.phone);
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

app.delete("/deleteRotations/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  // Delete data from the rotations table using the provided ID
  const deleteQuery = "DELETE FROM `clinical_rotations` WHERE `id`=?";
  connection.query(deleteQuery, id, (error, results) => {
    if (error) {
      console.error("Error deleting rotation:", error);
      res.status(500).json({ error: "Failed to delete rotation" });
      return;
    }
    console.log(`Rotation with ID ${id} deleted successfully`);
    res.json({ message: `Rotation with ID ${id} deleted successfully` });
  });
});

app.post("/educationalInformation", (req, res) => {
  console.log(req.body);
  const { institutionName, degree, fieldStudy, startDate, endDate } = req.body;
  const query = `INSERT INTO educational_info (institution_name,degree,field_of_study,start_date,end_date)
                VALUES (?, ?, ?, ?,?)`;

  connection.query(
    query,
    [institutionName, degree, fieldStudy, startDate, endDate],
    (error, results) => {
      if (error) {
        res.status(500).json({
          message: "Failed to insert user educatinal information data",
        });
      } else {
        res
          .status(200)
          .json({ message: "Educational data inserted successfully" });
      }
    }
  );
});
app.post("/emergencyInformation", (req, res) => {
  console.log(req.body);
  const { contactName, relationship, phoneNumber, email } = req.body;
  const query = `INSERT INTO emergency_info (contact_name,relationship,phone_number,email)
                VALUES (?, ?, ?, ?)`;

  connection.query(
    query,
    [contactName, relationship, phoneNumber, email],
    (error, results) => {
      if (error) {
        res.status(500).json({
          message: "Failed to insert emergency information data",
        });
      } else {
        res
          .status(200)
          .json({ message: "Emergency data inserted successfully" });
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

// route to select the records from clinicals_rotation
app.get("/selectClinical_rotations", (req, res) => {
  const query = `SELECT * FROM clinical_rotations `;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});

// route to select the records from clinicals_rotation
app.get("/clinical_rotations", (req, res) => {
  const query = `SELECT *,clinical_rotations.id, rotation_area_id, start_date, end_date, student_id,rotation_areas.area_name, 
                  CASE WHEN clinical_rotations.end_date < CURDATE() 
                  THEN 'Completed' 
                  WHEN clinical_rotations.start_date <= CURDATE() 
                  AND clinical_rotations.end_date >= CURDATE() 
                  THEN 'In Progress' 
                  ELSE 'Incomplete' 
                  END AS status 
                  FROM clinical_rotations 
                  INNER JOIN rotation_areas 
                  ON clinical_rotations.rotation_area_id = rotation_areas.id 
                  INNER JOIN personal_information 
                  ON clinical_rotations.student_id=personal_information.id`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});

//select list of students from personal information
app.get("/selectPersonalInformation", (req, res) => {
  const query = `SELECT * FROM personal_information`;

  connection.query(query, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ message: "Failed to select personal information data" });
    } else {
      res.status(200).json(results);
    }
  });
});


//select list of students from personal information
app.get("/selectStudentDetails/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM personal_information WHERE id=?`;

  connection.query(query,id, (error, results) => {
    if (error) {
      res
        .status(500)
        .json({ message: "Failed to select student information data" });
    } else {
      res.status(200).json(results);
    }
  });
});
//select list of rotation areas
app.get("/selectRotationAreas", (req, res) => {
  const query = `SELECT * FROM rotation_areas`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Failed to select rotation areas" });
    } else {
      res.status(200).json(results);
    }
  });
});

// Handle POST request to insert clinical placement rotation  data
app.post("/insertClinicalRotationData", (req, res) => {
  const { studentId, rotationAreaId, startRotationDate, endRotationDate } =
    req.body;

  // Insert the data into the database
  const query =
    "INSERT INTO clinical_rotations (rotation_area_id, start_date, end_date, student_id) VALUES (?, ?, ?, ?)";
  connection.query(
    query,
    [rotationAreaId, startRotationDate, endRotationDate, studentId],
    (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "Failed to insert data" });
      } else {
        res.status(200).json({ message: "Data inserted successfully" });
      }
    }
  );
});
app.post('/insertClinicalEvaluationData', (req, res) => {
  const evaluationData = req.body;
  console.log(evaluationData);
  // Insert the data into the MySQL table
  connection.query('INSERT INTO evaluation SET ?', evaluationData, (error, results) => {
    if (error) {
      console.error('Error inserting data into MySQL:', error);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    // Return a success response
    res.json({ message: 'Data inserted successfully' });
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
