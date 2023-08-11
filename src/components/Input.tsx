import Search from "../assets/Search.svg";
import axios from "axios";
import { SetStateAction, useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import UserDataInterface from "./Interface";

interface InputProps {
  darkMode: boolean;
}

const Input = ({ darkMode }: InputProps) => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState<UserDataInterface | undefined>(
    undefined
  );
  const [githubError, setGithubError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/lazzzare`
        );
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.log("Error:", error);
        setGithubError("No results");
      }
    };
    fetchUserData();
  }, []);

  const handleClick = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${value}`);
      const data = response.data;
      setUserData(data);
      setValue("");
    } catch (error: SetStateAction<any>) {
      console.log("Error:", error);
      setGithubError("No results");
    }
  };

  return (
    <div className={!darkMode ? "dark" : ""}>
      <div className="px-6 md:px-[97px] md:max-w-[930px] m-auto">
        <div
          className="bg-[#1E2A47] dark:bg-[#FEFEFE] flex flex-row
    justify-between pl-4 py-[7px] pr-[7px] items-center rounded-[15px] mx-auto"
        >
          <img src={Search} alt="Search" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Search GitHub username…"
            className="w-[70%] bg-[#1E2A47] dark:bg-[#FEFEFE] text-white dark:text-[#4B6A9B] text-xs md:text-lg leading-6 focus:outline-none"
          />

          <p className="text-[#F74646] font-bold text-[10px] md:text-[15px] md:p-0 mr-1">
            {githubError}
          </p>

          <button
            className="py-[12.5px] px-4 bg-[#0079FF] rounded-[10px]"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
      <div className="px-6 md:px-[97px] md:max-w-[930px] m-auto">
        <UserInfo user={userData} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Input;
