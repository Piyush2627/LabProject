import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { RefObject, useRef } from "react";
import Dashboard from "../Dashboard/Dashboard";

function MarksheetDoc() {
  const pdfref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null); // Define pdfref with RefObject<HTMLDivElement> type
  const downloadPDF = () => {
    const input = pdfref.current as HTMLDivElement; // Remove 'any' type assertion
    html2canvas(input).then((canvas: HTMLCanvasElement) => {
      const imgData: string = canvas.toDataURL("image/png");
      const pdf: jsPDF = new jsPDF("p", "mm", "a4", true);
      const pdfWidth: number = pdf.internal.pageSize.getWidth();
      const pdfHeight: number = pdf.internal.pageSize.getHeight();
      const imgWidth: number = canvas.width;
      const imgHeight: number = canvas.height;
      const ratio: number = Math.min(
        pdfWidth / imgWidth,
        pdfHeight / imgHeight
      );
      const imgX: number = (pdfWidth - imgWidth * ratio) / 2;
      const imgY: number = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  return (
    <>
      <div ref={pdfref}>
        Whant to make a redyployment server
      </div>
      <button onClick={downloadPDF}>Download PDF</button>{" "}
      {/* Added a button to trigger PDF download */}
    </>
  );
}

export default MarksheetDoc;
