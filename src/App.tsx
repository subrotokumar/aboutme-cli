import { FC, useState, useRef } from 'react'
import './App.css'
import Heading from './components/Heading';
import Help from './components/Help';
import Social from './components/Social';
import Email from './components/Email';



function App() {
  const [cli, setCli] = useState('');
  const [commandList, setCommandList] = useState(
    [
      <Heading />
    ],
  );

  const [historyList, sethistoryList] = useState<string[]>([]);

  function addCliLine(script: String) {
    return (
      <div className='cli'>
        <p className='cli'>coders@subrotokumar.com:~$</p>
        <p className='command'
        >{script}
        </p>
      </div>
    );
  }

  function handleOperation(command: string) {
    switch (command.toLowerCase()) {
      case 'about':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <p className="header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ex doloremque ut delectus. Debitis enim iste et ad. Quasi facere culpa doloribus asperiores minima cupiditate beatae blanditiis, mollitia atque alias neque dignissimos perspiciatis magnam nobis? Iusto quidem accusamus ab molestiae saepe fuga eligendi libero quas labore! Eaque beatae qui facilis odit similique officia! Distinctio, voluptatibus inventore esse veniam, sequi vitae fuga earum tempora voluptatem recusandae odit corporis, culpa ipsum perferendis ut eum fugit error nam. Vel eos ea obcaecati. Laudantium harum illo aliquid nostrum qui molestias architecto. Quis, dicta tenetur? Maiores praesentium debitis quas veniam laborum? Magni explicabo corrupti quam?</p>,
        ]);
        break;
      case 'banner':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <Heading />,
        ]);
        break;
      case 'clear':
        setCommandList([]);
        break;
      case 'education':
        break;
      case 'email':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <Email />
        ]);
        setTimeout(() => {
          window.open('mailto:subrotokumar@outlook.in')
        }, 1000);
        break;
      case 'help':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <Help />,
        ]);
        setInterval
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
      case 'skill':
        break;
      case 'social':
        setCommandList([
          ...commandList,
          addCliLine(cli),
          <Social />,
        ]);
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
        <p className='cli'>coders@subrotokumar.com:~$</p>
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
