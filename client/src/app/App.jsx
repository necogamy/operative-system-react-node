import React, { useState } from 'react';
import './style.css';
import assets from './index';
import Terminal from '../components/terminal/Terminal';

const App = () => {
  const [settings, setSettings] = useState({
    background: assets.images.wallpaper_7,
    terminal: false,
    navegator: false
  });

  const spawnApplication = application => {
    setSettings(prevState => ({
      ...prevState,
      [application]: !settings[application]
    }));
  }

  return (
    <main>
      <div id='background' style={{backgroundImage: `url(${settings.background})`, backgroundSize: 'cover'}} />
      <section id='taskbar'>
        <img style={{width: '2.5%', filter: 'invert(.7)'}} src={assets.ico.wifi} alt='wifi' />
      </section>
      <section id='sidebar'>
        <img onClick={() => spawnApplication('terminal')} className='application' src={assets.ico.terminal} alt='terminal' />
        <img className='application' src={assets.ico.internet} alt='internet' />
      </section>
      {settings.terminal ? <Terminal onClick={spawnApplication} /> : null}
    </main>
  )
};

export default App;
