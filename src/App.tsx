import { useState, useRef, useEffect, FC } from 'react'
import './App.css'
import Heading from './components/Heading';
import Help from './components/Help';
import Social from './components/Social';
import Email from './components/Email';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Eduaction from './components/Eduaction';
import About from './components/About';
import Experience from './components/Experience';



function App() {  
  const [cli, setCli] = useState('');
  const [commandList, setCommandList] = useState(
    [
      <Heading />
    ],
  );
  
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [commandList])

  const [historyList, sethistoryList] = useState<string[]>([]);

  function addCliLine(script: String) {
    return (
      <div className='cli'>
        <p className='cli'>visitor@aboutme-cli:~$</p>
        <p className='command'
        >{script}
        </p>
      </div>
    );
  }

  function addElement(Comp: FC) {
    setCommandList([
      ...commandList,
      addCliLine(cli),
      <Comp/>
    ]);
  }

  function handleOperation(command: string) {
    switch (command.toLowerCase()) {
      case '':
        case 'hi':
        setCommandList([
          ...commandList,
          addCliLine(cli),
        ]);
        break;
      case 'about':
        addElement(About);
        break;

      case 'banner':
        addElement(Heading);
        break;

      case 'cls':
      case 'clear':
        setCommandList([]);
        break;

      case 'education':
        addElement(Eduaction);
        break;

      case 'email':
        addElement(Email);
        break;

      case 'hello':
      case 'hey':
      case 'hi':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <><p className="info">Hello, welcome to my interactive web terminal.</p>
          <p className="info">For a list of available commands, type '<span>help</span>'.</p></>
        ]);
        break;

      case 'help':
        addElement(Help);
        break;

      case 'history':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          (<div>
            {
              historyList.map(e => (<p className="header">{e}</p>))
            }
          </div>),
        ]);
        break;
      case "exp":
      case "experience":
      case "company":
      case "work":
        addElement(Experience);
        break;
      case 'resume': 
        addElement(Resume);
        break;

      case 'skills':
      case 'skill':
        addElement(Skills);
        break;
        
      case 'social':
        addElement(Social);
        break;

      default:
        setCommandList([
          ...commandList,
          addCliLine(cli),
          (<p className="header">Command not found. For a list of commands, type '<span>help</span>'.</p>),
        ]);
        break;
    }
  }

  return (
    <div className="App">
      {
        commandList.map(e => {
          return (
            e
          );
        })
      }
      <div className='cli'>
        <p className='cli'>visitor@aboutme-cli:~$</p>
        <input type='text'
          className='command'
          value={cli}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              sethistoryList([...historyList, cli]);
              handleOperation(cli);
              setCli('');
            }
          }}
          onChange={e => setCli(e.target.value)}
        >
        </input>
      </div>
    </div >
  )
}

export default App
