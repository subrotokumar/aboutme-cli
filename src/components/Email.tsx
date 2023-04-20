export default function Email() {
    setTimeout(() => {
        window.open('mailto:subrotokumar@outlook.in')
    }, 1000);
    return (
        <div className="link">
            <p className="info">Opening mailto:</p>
            <p><a target="_blank" href="mailto:subrotokumar@outlook.in">subrotokumar@outlook.in</a></p>
            <p>...</p>
        </div>
    );
}