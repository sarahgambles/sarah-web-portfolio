import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
          <Document
            file="./src/assets/resume/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
          </Document>
          
        </div>
      );
}

export default Resume;