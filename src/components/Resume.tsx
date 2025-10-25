const resume = "https://drive.google.com/file/d/1iFe5jQU4b9Rwnyq8dHNDSPJoB9Zw8LhI/view?usp=sharing"
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