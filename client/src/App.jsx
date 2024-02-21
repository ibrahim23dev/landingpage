import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  
  const current_them = localStorage.getItem('current_them')
  const [theme, SetTheme] = useState(current_them ? current_them : 'light');

  useEffect(() => {
    localStorage.setItem('current_them', theme)
  },[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} SetTheme={SetTheme} />
   </div>
  );
}

export default App;
