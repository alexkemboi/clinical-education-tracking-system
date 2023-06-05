import React, { useEffect, useState, useRef } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Pagination from 'react-js-pagination';
const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const evaluationTable = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [evaluationsPerPage] = useState(10); // Number of evaluations to show per page

  // Logic to determine the evaluations to display on the current page
  const indexOfLastEvaluation = currentPage * evaluationsPerPage;
  const indexOfFirstEvaluation = indexOfLastEvaluation - evaluationsPerPage;
  const currentEvaluations = evaluations.slice(indexOfFirstEvaluation, indexOfLastEvaluation);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    fetch("http://localhost:3001/evaluations")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvaluations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  
  const PDFDocument = () => (
    <Document>
    <Page size="A4" style={styles.page}  >
      <View style={styles.table} className="table table-bordered table-striped">
        <View style={[styles.tableRow, styles.tableHeader]} className="thead-dark">
          <View style={styles.tableCell}>
            <Text>Rotation ID</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Student ID</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Supervisor ID</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Time In</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Time Out</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Feedback</Text>
          </View>
          <View style={styles.tableCell}>
            <Text>Rating</Text>
          </View>
        </View>

        {evaluations.map((evaluation) => (
          <View style={styles.tableRow} key={evaluation.evaluationId}>
            <View style={styles.tableCell}>
              <Text>{evaluation.rotationId}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.studentId}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.supervisorId}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.timeIn}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.timeOut}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.feedback}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{evaluation.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
  );
  
  // ...
  
  // Define the styles for your PDF document
  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Helvetica',
      fontSize: 12,
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 30,
    },
    table: {
      display: 'table',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#000',
      marginBottom: 10,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    tableHeader: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
    tableCell: {
      margin: 'auto',
      marginTop: 5,
      marginBottom: 5,
      // borderWidth: 1,
      // borderColor: '#000',
      padding: 5,
      flex: 1,
    },
  });

  

  return (
    <div className="container">
      <h6>Evaluations</h6>
      <div className="row">
        <div className="col-8">
          <div className="input-group p-1">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Search by id"
              aria-label="Search"
              aria-describedby="search-icon"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-icon">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <PDFDownloadLink document={<PDFDocument />} fileName="table_data.pdf" className="form-control bg-success">
          {({ blob, url, loading, error }) =>
            loading ? "Generating PDF..." : "Download PDF"
          }
        </PDFDownloadLink>
        </div>
      </div>
      <div className="table-responsive text-center">
        <table
          ref={evaluationTable}
          className="table table-bordered table-striped"
        >
          <thead className="thead-dark">
            <tr>
              {/* <th>Evaluation ID</th>
              <th>Date</th> */}
              <th>Rotation ID</th>
              <th>Student ID</th>
              <th>Supervisor ID</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Feedback</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {currentEvaluations.map((evaluation) => (
              <tr key={evaluation.evaluationId}>
                {/* <td>{evaluation.evaluationId}</td>
                <td>{evaluation.date}</td> */}
                <td>{evaluation.rotationId}</td>
                <td>{evaluation.studentId}</td>
                <td>{evaluation.supervisorId}</td>
                <td>{evaluation.timeIn}</td>
                <td>{evaluation.timeOut}</td>
                <td>{evaluation.feedback}</td>
                <td>{evaluation.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>  
        <Pagination 
        className="text-center"
        activePage={currentPage}
        itemsCountPerPage={evaluationsPerPage}
        totalItemsCount={evaluations.length}
        pageRangeDisplayed={5} // Number of page links to display
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />     
      </div>
    </div>
  );
};

export default EvaluationList;
