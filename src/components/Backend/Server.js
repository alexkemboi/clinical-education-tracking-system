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
  apiKey: "3e76ad55d44fd317b7f761b32cc042195e27c1abc5d64d58c0a94a8cec32c206",
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







app.post('/ussd', (req, res) => {
  let { text, phoneNumber } = req.body;
  let response = '';
      text='';
  if (text === '') {
    // This is the first request. Ask for the user's first name.
    response = `CON Hi, it's Alex Kemboi. Please provide your First Name:`;
  } else if (text === '1') {
    // User entered their first name. Save the name and ask for the second name.
    response = `CON Thank you. Now, please provide your Second Name:`;
  } else if (text === '2') {
    // User entered their second name. Save the name and ask for the date of birth.
    response = `CON Great! Next, please provide your Date of Birth (YYYY-MM-DD):`;
  } else if (text === '3') {
    // User entered their date of birth. Save the data and ask for the gender.
    response = `CON Excellent! Now, please provide your Gender (M/F):`;
  } else if (text === '4') {
    // User entered their gender. Save the data and ask for the address.
    response = `CON Thank you! Please provide your Address:`;
  } else if (text === '5') {
    // User entered their address. Save the data and ask for the phone number.
    response = `CON Almost there! Please provide your Phone Number:`;
  } else if (text === '6') {
    // User entered their phone number. Save the data and ask for the email.
    response = `CON Last step! Please provide your Email Address:`;
  } else if (text === '7') {
    // User entered their email. Save the data and ask for the password.
    response = `CON Final step! Please provide your Password:`;
  } else if (text === '8') {
    // User entered their password. Save all data and insert into the database.

    const {
      firstName,
      secondName,
      dob,
      gender,
      address,
      phone,
      email,
      password
    } = req.body;

    const query = `INSERT INTO personal_information (firstName, secondName, dob, gender, address, phone_number, email, password)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
      query,
      [firstName, secondName, dob, gender, address, phone, email, password],
      (error, results) => {
        if (error) {
          console.error('Failed to insert personal information:', error);
          res
            .status(500)
            .json({
              message: "Failed to insert user personal information data"
            });
        } else {
          console.log('Personal data inserted successfully');
          res
            .status(200)
            .json({ message: "Personal data inserted successfully" });
        }
      }
    );

    response = `END Thank you for providing your information!`;
  } else {
    // Handle unrecognized or invalid input.
    response = `CON Invalid option. Please enter a valid option.
    Press 9 to exit...`;
  }

  // Send the response back to the USSD gateway
  res.set('Content-Type', 'text/plain');
  res.send(response);
});






// app.post('/ussd', (req, res) => {
//   const { text,phoneNumber } = req.body;
//   let response = '';

//   if (text === '') {
    
//     // This is the first request. Ask for your loved one's name.
//     response = `CON Hi, it's Alex Kemboi. I just wanted to remind you how much I love you.
//    Press 1 to Send:`;
//     sendMessage(`Hi, it's Alex Kemboi. I just wanted to remind you how much I love you.`,phoneNumber);
//   } else if (text=== '1') {
//     // User entered their name. Save the name and express your love.
    
//     response = `CON Hi I want you to know that you mean the world to me. I love you more than words can express.
//     Press 2 to continue...`;
//   } else if (text=== '2' ) {
//     // User pressed a key to continue. Send another love message.
//     response = `CON my love for you grows stronger with each passing day. You make my life brighter and happier.
//     Press 3 key to continue...`;
//   } else if (text=== '3') {
//     // User pressed a key to continue. Send the final love message.
//     response = `CON I just want to say that I am incredibly lucky to have you in my life. I love you more than anything in this world.
//     Press 3 to end...`;
//   } else {
//     // Handle unrecognized or invalid input.
//     response = `CON Even if you pressed a wrong number ,I Alex still loves you. press send to exit`;
//   }

//   // Send the response back to the USSD gateway
//   res.set('Content-Type', 'text/plain');
//   res.send(response);
// });

// app.post('/ussds', (req, res) => {
//   const { text, phoneNumber } = req.body;
//   let response = '';

//   if (text === '') {
//     // This is the first request. Display the main menu.
//     response = `CON Hi, it's CERPS. Please select an option:
//     1. View Clinical Education Rotation
//     2. View Placement Status
//     3. Check Results Status
//     Press 4 to exit.`;
//     sendMessage(`Hi, it's CERPS. Choose an option.`, phoneNumber);
//   } else if (text === '1') {
//     // User selected option 1. View Clinical Education Rotation.
//     // Implement logic to retrieve and display clinical education rotation.
//     response = `CON Clinical Education Rotation: [Retrieve and display rotation details here]
//     Press 4 to exit...`;
//   } else if (text === '2') {
//     // User selected option 2. View placement status.
//     // Implement logic to retrieve and display placement status.
//     response = `CON Your placement status: [Retrieve and display status here]
//     Press 4 to exit...`;
//   } else if (text === '3') {
//     // User selected option 3. Check results status.
//     // Implement logic to retrieve and display results status.
//     response = `CON Your results status: [Retrieve and display status here]
//     Press 4 to exit...`;
//   } else if (text === '4') {
//     // User selected option 4. Exit the USSD session.
//     response = `END Goodbye. Thank you for using Alex's service.`;
//   } else {
//     // Handle unrecognized or invalid input.
//     response = `CON Invalid option. Please select a valid option.
//     Press 4 to exit...`;
//   }

//   // Send the response back to the USSD gateway
//   res.set('Content-Type', 'text/plain');
//   res.send(response);
// });


// app.post('/ussd', (req, res) => {
//   // Read the variables sent via POST from our API
//   const {
//       sessionId,
//       serviceCode,
//       phoneNumber,
//       text,
//   } = req.body;

//   let response = '';

//   if (text == '') {
//       // This is the first request. Note how we start the response with CON
//       response = `CON What would you like to check
//       1. My account
//       2. My phone number`;
//   } else if ( text == '1') {
//       // Business logic for first level response
//       response = `CON Choose account information you want to view
//       1. Account number`;
//   } else if ( text == '2') {
//       // Business logic for first level response
//       // This is a terminal request. Note how we start the response with END
//       response = `END Your phone number is ${phoneNumber}`;
//   } else if ( text == '1*1') {
//       // This is a second level response where the user selected 1 in the first instance
//       const accountNumber = 'ACC100101';
//       // This is a terminal request. Note how we start the response with END
//       response = `END Your account number is ${accountNumber}`;
//   }

//   // Send the response back to the API
//   res.set('Content-Type: text/plain');
//   res.send(response);
// });



app.post("/insertLogData", (req, res) => {
  const formData = req.body;

  // Insert the form data into the logtable
  const sql = "INSERT INTO logtable SET ?";

  connection.query(sql, formData, (err, result) => {
    if (err) {
      console.error("Error inserting data into logtable: " + err.stack);
      res
        .status(500)
        .json({ error: "An error occurred while saving the data." });
      return;
    }

    // Data inserted successfully
    console.log("Data inserted into logtable with ID: " + result.insertId);
    res.status(200).json({ message: "Data saved successfully." });
  });
});
// Define the POST route for supervisor registration
app.post('/registerSuperVisor', (req, res) => {
  console.log(req.body);
  const { name, rotationId, phoneNumber, address,email } = req.body;

  const query = `INSERT INTO supervisors (name, rotationId, phone,email, address)
                VALUES (?,?, ?, ?, ?)`;

  connection.query(
    query,
    [name, rotationId, phoneNumber,email, address],
    (error, results) => {
      if (error) {
        console.error('Failed to insert supervisor data:', error);
        res.status(500).json({ message: 'Failed to insert supervisor data' });
      } else {
        console.log('Supervisor data inserted successfully');
        res.status(200).json({ message: 'Supervisor data inserted successfully' });
      }
    }
  );
});
app.get('/count', (req, res) => {
  connection.query(
      `SELECT 
          table_name,
          table_rows
      FROM 
          information_schema.tables
      WHERE 
          table_schema = 'clinicaleducationtrackingsystem'
          AND table_name IN (
              'additional_information',
              'clinical_rotations',
              'educational_info',
              'emergency_info',
              'evaluation',
              'logtable',
              'personal_information',
              'rotation_areas',
              'rotation_area_objectives',
              'supervisors',
              'users'
          );`,
      (error, results) => {
          if (error) {
              res.status(500).send('Error executing the query.');
          } else {
              res.json(results);
          }
      }
  );
});
// Define the POST route for assessment submission
app.post('/selfAssessments', (req, res) => {
  const {
    date,
    reportingTime,
    timeLeft,
    rotation,
    lessonsLearned,
    improvements,
    rating,
    name
  } = req.body;

  const query = `INSERT INTO logtable (date, reportingTime, timeLeft, rotation, lessonsLearned, improvements, rating, name)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(
    query,
    [date, reportingTime, timeLeft, rotation, lessonsLearned, improvements, rating, name],
    (error, results) => {
      if (error) {
        console.error('Failed to insert assessment data:', error);
        res.status(500).json({ message: 'Failed to insert assessment data' });
      } else {
        console.log('Assessment data inserted successfully');
        res.status(200).json({ message: 'Assessment data inserted successfully' });
      }
    }
  );
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
  const { firstName,
    lastName,
    dob,
    gender,
    address,
    phoneNumber,
    email,
    password } =
    req.body;
  console.log(req.body);
  const query = `INSERT INTO personal_information (
  firstName,
  secondName,
  dob,
  gender,
  address,
  phone_number,
  email,
  password )
                VALUES (?, ?, ?, ?,?,?,?,?)`;

  connection.query(
    query,
    [ firstName,
      lastName,
      dob,
      gender,
      address,
      phoneNumber,
      email,
      password],
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json({ message: "Failed to insert user personal information data" });
      } else {
        res
          .status(200)
          .json({ message: "Personal data inserted successfully" });
          console.log("Personal data inserted successfully")
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

app.get('/results/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT pi.Id, pi.firstName, pi.secondName,
  SUM(e.rating) as totalMarks ,
  CASE WHEN SUM(e.rating) > 50 THEN 'Passed' ELSE 'Failed' END AS grade 
  FROM personal_information pi JOIN evaluation e ON e.studentId = pi.id 
  WHERE pi.Id=${id} GROUP BY pi.firstName;`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the SQL query:', err);
      res.status(500).json({ error: 'Failed to fetch results' });
      return;
    }
    res.json(results);
  });
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
    "SELECT id,firstName, secondName FROM personal_information WHERE email=? AND password=?";
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
app.get("/personal_information", (req, res) => {
  const query = `SELECT * FROM personal_information`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/supervisors", (req, res) => {
  const query = `SELECT * FROM supervisors`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});
app.get("/evaluations", (req, res) => {
  const query = `SELECT * FROM evaluation`;

  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});
// route to select the records from clinicals_rotation
app.get("/searchClinicalRotations/:id", (req, res) => {
  const id = req.params.id;
  // The search term entered by the user

  const query = `SELECT *, clinical_rotations.id, rotation_area_id, start_date, end_date, student_id, rotation_areas.area_name, 
    CASE
      WHEN clinical_rotations.end_date < CURDATE() THEN 'Completed' 
      WHEN clinical_rotations.start_date <= CURDATE() AND 
      clinical_rotations.end_date >= CURDATE() THEN 'In Progress' 
      ELSE 'Pending' 
    END AS status 
    FROM clinical_rotations 
    INNER JOIN rotation_areas ON clinical_rotations.rotation_area_id = rotation_areas.id 
    INNER JOIN personal_information ON clinical_rotations.student_id = personal_information.id 
    WHERE clinical_rotations.id like ? 
        
      `;
  // Add wildcard characters to the search term

  connection.query(query, id, (error, results) => {
    if (error) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
});

// route to select the records from clinicals_rotation
app.get("/clinical_rotations/:id", (req, res) => {
    const id = req.params.id;
  const query = `SELECT personal_information.firstName,personal_information.secondName,clinical_rotations.id, rotation_area_id, start_date, end_date, student_id,rotation_areas.area_name, CASE WHEN clinical_rotations.end_date < CURDATE() THEN 'Completed' WHEN clinical_rotations.start_date <= CURDATE() AND clinical_rotations.end_date >= CURDATE() THEN 'In Progress' ELSE 'Incomplete' END AS status FROM clinical_rotations INNER JOIN rotation_areas ON clinical_rotations.rotation_area_id = rotation_areas.id INNER JOIN personal_information 
  ON clinical_rotations.student_id=personal_information.id WHERE personal_information.id=${id}`;

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

  connection.query(query, id, (error, results) => {
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
app.post("/insertClinicalRotationData", async (req, res) => {
  const { studentId, rotationAreaId, startRotationDate, endRotationDate } = req.body;

  if (!studentId || !rotationAreaId || !startRotationDate || !endRotationDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const query =
      "INSERT INTO clinical_rotations (rotation_area_id, start_date, end_date, student_id) VALUES (?, ?, ?, ?)";
    const results = await connection.query(query, [rotationAreaId, startRotationDate, endRotationDate, studentId]);
    
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
});

app.post("/insertClinicalEvaluationData", (req, res) => {
  const evaluationData = req.body;
  console.log(evaluationData);
  // Insert the data into the MySQL table
  connection.query(
    "INSERT INTO evaluation SET ?",
    evaluationData,
    (error, results) => {
      if (error) {
        console.error("Error inserting data into MySQL:", error);
        res.status(500).json({ error: "An error occurred" });
        return;
      }

      // Return a success response
      res.json({ message: "Data inserted successfully" });
    }
  );
});

app.get("/rotation-areas", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM rotation_areas");
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error("Error executing MySQL query:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
