import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  console.log(darkMode);
  return (
    // <div className={!darkMode ? "dark" : ""}>
    //   <div className="flex justify-between px-6 md:px-[97px] pb-9 pt-8 items-center md:max-w-[930px] md:mx-auto">
    //     <h1 className="text-[26px] font-bold text-white dark:text-[#222731]">
    //       devfinder
    //     </h1>
    //     <div
    //       onClick={() => setDarkMode(!darkMode)}
    //       className="flex cursor-pointer flex-row items-center gap-x-4"
    //     >
    //       <h2 className="tracing-[2.5px] text-[13px] font-bold uppercase dark:text-[#4B6A9B]">
    //         {darkMode ? "Light" : "Dark"}
    //       </h2>
    //       {darkMode ? (
    //         <img src={Sun} alt="SunIcon" />
    //       ) : (
    //         <img src={Moon} alt="MoonIcon" />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
