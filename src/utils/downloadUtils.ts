import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function downloadAsPDF(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    alert('Resume not found. Please try again.');
    return;
  }

  try {
    // Simple canvas capture
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false
    });

    // Create PDF - simple A4 size
    const pdf = new jsPDF('portrait', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please try again.');
  }
}