import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const convertToPDF = async (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // High-res scale (2–3 is ideal)
  const scale = 3;

  const canvas = await html2canvas(element, {
    scale: scale, // ⬅️ This improves the resolution
    useCORS: true, // ⬅️ If you use external images
    logging: false,
  });

  const imgData = canvas.toDataURL('image/png');

  // A4 size in mm → 210 x 297
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('download.pdf');
};
