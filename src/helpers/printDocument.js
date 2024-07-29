
import jsPDF from "jspdf";
import { v4 as uuidv4 } from "uuid";

// const printDocument = async (className = "form") => {
//     const form = document.querySelector(`.form-content`);
//     console.log(form);
//     if (!form) return;
//     form.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//       inline: "nearest",
//     });
//     setTimeout(() => {
//       html2canvas(form, {
//         scrollY: -window.scrollY,
//         width: form.scrollWidth,
//         height: form.scrollHeight,
//       }).then(async (canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF();
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = pdf.internal.pageSize.getHeight();
//         const aspectRatio = canvas.width / canvas.height;
//         const pdfImgHeight = pdfHeight;
//         const pdfImgWidth = pdfImgHeight * aspectRatio;
//         const offsetX = (pdfWidth - pdfImgWidth) / 2;
//         pdf.addImage(imgData, "JPEG", offsetX, 0, pdfImgWidth, pdfImgHeight);
//         // pdf.save("download.pdf");
//         const pdfBytes = pdf.output("arraybuffer");
//         // const pdfBuffer = Buffer.from(pdfBytes);
//         const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
//         const formData = new FormData();
//         formData.append("pdf", pdfBlob, `${uuidv4()}.pdf`);
//         const baseUrl =
//           process.env.REACT_APP_STAGE === "development"
//             ? "apidev.mosqapp.com"
//             : "api.mosqapp.com";
//         fetch(`https://${baseUrl}/file/upload`, {
//           method: "POST",
//           body: formData,
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Failed to upload PDF");
//             }
//             return response.json();
//           })
//           .then((data) => {
//             console.log("PDF uploaded successfully:", data.data?.link);
//           })
//           .catch((error) => {
//             console.error("Error uploading PDF:", error);
//           });
//       });
//     }, 1000);
//   };

const printDocument = async () => {
  const imgData = localStorage.getItem('formImage');

  if (!imgData) {
    console.error('No form image found in localStorage.');
    return;
  }

  const pdf = new jsPDF();
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  // Calculate aspect ratio and image dimensions
  const img = new Image();
  img.src = imgData;
  
  img.onload = () => {
    const aspectRatio = img.width / img.height;
    const pdfImgHeight = pdfHeight;
    const pdfImgWidth = pdfImgHeight * aspectRatio;
    const offsetX = (pdfWidth - pdfImgWidth) / 2;

    pdf.addImage(imgData, 'PNG', offsetX, 0, pdfImgWidth, pdfImgHeight);
    const pdfBytes = pdf.output('arraybuffer');
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('pdf', pdfBlob, `${uuidv4()}.pdf`);
    
    const baseUrl =
      process.env.REACT_APP_STAGE === 'development'
        ? 'apidev.mosqapp.com'
        : 'api.mosqapp.com';
    
    fetch(`http://localhost:8070/file/upload?location=digitalFormMedia`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload PDF');
        }
        return response.json();
      })
      .then((data) => {
        console.log('PDF uploaded successfully:', data.data?.link);
      })
      .catch((error) => {
        console.error('Error uploading PDF:', error);
      });
  };
};

export default printDocument;
