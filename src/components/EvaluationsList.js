import React, { useEffect, useState, useRef } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";
import Pagination from "./Pagination";

const EvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [evaluationsPerPage] = useState(20);
  const evaluationTable = useRef(null);

  const downloadAsPDF = () => {
    console.log("working");
    const table = evaluationTable.current;
    const pdf = new jsPDF("p", "pt", "letter");

    html2pdf()
      .set({ jsPDF: pdf, html2canvas: window.html2canvas })
      .from(table)
      .save("table_data.pdf");
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

  // Get current evaluations
  const indexOfLastEvaluation = currentPage * evaluationsPerPage;
  const indexOfFirstEvaluation = indexOfLastEvaluation - evaluationsPerPage;
  const currentEvaluations = evaluations.slice(
    indexOfFirstEvaluation,
    indexOfLastEvaluation
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const PDFDocument = () => (
    <Document>
      <Page>
        <View style={styles.page}>
          <Text>Table data goes here</Text>
        </View>
      </Page>
    </Document>
  );
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      padding: 30,
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
          <button className="form-control bg-success" onClick={downloadAsPDF}>
            Download PDF
          </button>
        </div>
      </div>
      <div className="table-responsive">
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
        <PDFDownloadLink document={<PDFDocument />} fileName="table_data.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Generating PDF..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
      <Pagination
        evaluationsPerPage={evaluationsPerPage}
        totalEvaluations={evaluations.length}
        paginate={paginate}
      />
    </div>
  );
};

export default EvaluationList;
