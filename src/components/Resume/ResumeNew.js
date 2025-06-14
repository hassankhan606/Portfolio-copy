import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// Corrected import: The variable 'pdf' is now used consistently
import pdf from '../../Assets/Hafiz Hassan Iftikhar Cv.pdf';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// configure pdf.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top download button */}
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "1rem" }}>
          <Button
            variant="primary"
            // Use 'pdf' here instead of 'ResumePdf'
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>

        {/* Embedded PDF */}
        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            // Use 'pdf' here instead of 'ResumePdf'
            file={pdf}
            className="d-flex justify-content-center"
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>

        {/* Bottom download button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "1rem" }}>
          <Button
            variant="primary"
            // Use 'pdf' here instead of 'ResumePdf'
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;