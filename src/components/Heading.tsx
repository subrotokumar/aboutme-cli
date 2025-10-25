import { FC } from "react";
const Heading: FC = () => {
    const LOGO = `
   _____         __                  __            __ __                             
  / ___/ __  __ / /_   _____ ____   / /_ ____     / //_/__  __ ____ ___   ____ _ _____
  \\__ \\ / / / // __ \\ / ___// __ \\ / __// __ \\   / ,<  / / / // __ \`__ \\ / __ \`// ___/
 ___/ // /_/ // /_/ // /   / /_/ // /_ / /_/ /  / /| |/ /_/ // / / / / // /_/ // /    
/____/ \\__,_//_.___//_/    \\____/ \\__/ \\____/  /_/ |_|\\__,_//_/ /_/ /_/ \\__,_//_/
`;

    return (
        <>
            <p className='header'>Subroto Kumar (SK) — Software Engineer | Architecting Systems with Precision ⚔️</p>
            <pre>
                {LOGO}
            </pre>
            <p className="info">
                Welcome to my interactive terminal. Booting up creativity...
            </p>
            <p className="info">
                Explore the matrix of my code and projects. For a list of available commands, type '<span>help</span>'.
            </p>
            <p className="info">
                Tip: I promise there are no viruses here, only well-compiled ideas 💻
            </p>
            <p className="info">
                Checkout my portfolio: <a href="https://subrotokumar.dev">subrotokumar.dev</a>
            </p>
        </>
    );
}

export default Heading;