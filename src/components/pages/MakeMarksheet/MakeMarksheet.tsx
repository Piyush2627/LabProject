import React from "react";
import MarksheetDoc from "./MarksheetDoc";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

function MakeMarksheet() {
  return (
    <>
      <PDFDownloadLink document={<MarksheetDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
      <PDFViewer children={<MarksheetDoc />}></PDFViewer>
    </>
  );
}

export default MakeMarksheet;
