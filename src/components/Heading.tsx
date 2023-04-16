import { FC } from "react";
const Heading: FC = () => {
    const LOGO = `
   _____         __                  __            __ __                             
  / ___/ __  __ / /_   _____ ____   / /_ ____     / //_/__  __ ____ ___   ____ _ _____
  \\__ \\ / / / // __ \\ / ___// __ \\ / __// __ \\   / ,<  / / / // __ \`__ \\ / __ \`// ___/
 ___/ // /_/ // /_/ // /   / /_/ // /_ / /_/ /  / /| |/ /_/ // / / / / // /_/ // /    
/____/ \\__,_//_.___//_/    \\____/ \\__/ \\____/  /_/ |_|\\__,_//_/ /_/ /_/ \\__,_//_/  © 2023 
`;

    return (
        <>
            <p className='header' >Subroto Kumar(SK) Not A Corporation. All knights reserved.</p>
            <pre>{LOGO}</pre>
            <p className="info">Welcome to my interactive web terminal.</p>
            <p className="info">For a list of available commands, type '<span>help</span>'.</p>
        </>
    );
}

export default Heading;