const resume = "https://gitlab.com/subrotokumar.dev/public/-/raw/main/resume.pdf?ref_type=heads&inline=true"
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