import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [theme, SetTheme] = useState('light');
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} SetTheme={SetTheme} />
   </div>
  );
}

export default App;
