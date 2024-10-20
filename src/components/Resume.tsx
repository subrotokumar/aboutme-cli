import resume from "../assets/resume.pdf"

export default function Resume() {
    setTimeout(() => {
        window.open(`${resume}`)
      }, 1000);
    return (
        <div className="link">
            <p className="info">Opening&nbsp;</p>
            <p><a target="_blank" href={resume}>Subroto's Resume</a></p>
            <p>&nbsp;...</p>
        </div>
    );
}