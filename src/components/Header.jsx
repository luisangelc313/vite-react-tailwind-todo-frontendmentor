import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);
    
    useEffect(() => {
      //console.log('darkMode')
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme', 'dark');
      } 
      else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold uppercase tracking-[0.4em] text-white">todo</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode ? <IconSun /> : <IconMoon />
            }
          </button>
        </div>
      </header>
    );
 };

 export default Header;