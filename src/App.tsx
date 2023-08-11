import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () => sessionStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    sessionStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div className={!darkMode ? "dark" : ""}>
      <div className="m-auto flex min-h-screen w-full md:justify-center flex-col transition-colors bg-[#141D2F] dark:bg-[#F6F8FF] text-white">
        <div className="">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Input darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
