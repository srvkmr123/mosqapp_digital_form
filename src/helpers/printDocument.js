
import jsPDF from "jspdf";
import { v4 as uuidv4 } from "uuid";

const printDocument = async (setLoading) => {
  const imgData = localStorage.getItem('formImage');

  if (!imgData) {
    console.error('No form image found in localStorage.');
    return;
  }

  const pdf = new jsPDF();
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();


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
        setLoading(false)
        return response.json();
      })
      .then((data) => {
        console.log('PDF uploaded successfully:', data.data?.link);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error uploading PDF:', error);
        setLoading(false)
      });
  };
};

export default printDocument;
