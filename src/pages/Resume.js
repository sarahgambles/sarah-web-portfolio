import React from 'react';
import { Document } from 'react-pdf'

function resume() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages}) {
        setNumPages();
    }

    return (
        <div>
            <Document
            file="resume.pdf"
            onLoadSucces={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p> Resume </p>
        </div>
    )

}