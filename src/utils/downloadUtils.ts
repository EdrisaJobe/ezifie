import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { ResumeData } from '../pages/ResumeBuilder/types';

export async function downloadAsPDF(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    // Calculate dimensions (US Letter size at 96 DPI)
    const width = 816; // 8.5 inches
    const height = 1056; // 11 inches

    // Get the content element to calculate total height
    const content = document.getElementById('resume-content');
    if (!content) return;

    const contentHeight = content.scrollHeight;
    const totalPages = Math.ceil(contentHeight / (height - 96)); // 96px for padding

    // Create PDF with proper dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [width, height],
      compress: true
    });

    // Process each page
    for (let page = 0; page < totalPages; page++) {
      // Create a clone for each page
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.width = `${width}px`;
      clone.style.height = `${height}px`;
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);

      // Remove preview banner if exists
      const banner = clone.querySelector('[data-preview-banner]');
      if (banner) {
        banner.remove();
      }

      // Set content position for current page
      const content = clone.querySelector('#resume-content') as HTMLElement;
      if (content) {
        content.style.transform = `translateY(-${page * (height - 96)}px)`;
      }

      // Ensure all fonts are loaded
      await document.fonts.ready;

      const canvas = await html2canvas(clone, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width,
        height,
        windowWidth: width,
        windowHeight: height,
        logging: false,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.body.lastElementChild as HTMLElement;
          if (clonedElement) {
            clonedElement.style.padding = '48px';
            clonedElement.style.boxSizing = 'border-box';
            clonedElement.style.border = 'none';
            clonedElement.style.borderRadius = '0';
            clonedElement.style.boxShadow = 'none';
          }
        }
      });

      // Remove the clone
      document.body.removeChild(clone);

      // Add page to PDF
      if (page > 0) {
        pdf.addPage();
      }

      pdf.addImage(
        canvas.toDataURL('image/png', 1.0),
        'PNG',
        0,
        0,
        width,
        height,
        undefined,
        'FAST'
      );
    }

    pdf.save(`${filename}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

export function downloadAsDocx(data: ResumeData, filename: string): void {
  // Create a blob with resume content
  const content = `
${data.personalInfo.fullName}
${data.personalInfo.title}
${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}
${data.personalInfo.linkedin ? `LinkedIn: ${data.personalInfo.linkedin}` : ''}

Professional Summary
${data.personalInfo.summary}

Experience
${data.experience.map(exp => `
${exp.title}
${exp.company} | ${exp.location}
${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}
${exp.description}
`).join('\n')}

Education
${data.education.map(edu => `
${edu.institution}
${edu.degree}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}
${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}
`).join('\n')}

Skills
${data.skills.join(', ')}

Languages
${data.languages.map(lang => `${lang.name} (${lang.proficiency})`).join(', ')}
`;

  const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.docx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}