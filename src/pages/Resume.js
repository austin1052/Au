import resumePDF from '../resume.pdf'

const Resume = () => {

  return (
    <div class="embed-responsive" style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <embed
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      />
      <a href={resumePDF} className="btn" style={{ textAlign: "center", margin: "1rem" }} download>download</a>
    </div>
  );
};

export default Resume;