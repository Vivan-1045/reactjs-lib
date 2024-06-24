import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./componanat/Themebtn";
import Card from "./componanat/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };


  //Actual change in theme
  useEffect(() => {
    const d = document.querySelector('html')//.classList.remove("light","dark");
    d.classList.remove("light","dark")
    d.classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
