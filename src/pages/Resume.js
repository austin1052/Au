import resumePDF from '../resume.pdf'

const Resume = () => {

  return (
    <div class="embed-responsive" style={{ minHeight: "100vh", width: "100%" }}>
      <embed
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Resume;