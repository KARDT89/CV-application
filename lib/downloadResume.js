import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const convertToPDF = (res) => {
  // capture the element that you want to convert to pdf
  const targetElement = document.getElementById(res);

  if (targetElement) {
    // convert that Element to canvas
    html2canvas(targetElement, {
      scale: 2,
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      // once the Element has been successfully converted to canvas
      // set the width and height of canvas
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // convert canvas to png image
      const imgData = canvas.toDataURL('img/png');
      // initialize a new PDF object
      const pdf = new jsPDF('p', 'mm', 'a4');
      // convert that png image into pdf
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      // download the pdf
      pdf.save('resume');
    });
  }
};
