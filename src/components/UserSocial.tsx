import React from "react";
import Location from "../assets/Location.svg";
import LightLocation from "../assets/LightLocation.svg";
import GithubUrl from "../assets/GithubUrl.svg";
import LightGithubUrl from "../assets/LightGithubUrl.svg";
import Twitter from "../assets/Twitter.svg";
import LightTwitter from "../assets/LightTwitter.svg";
import OfficeBuilding from "../assets/OfficeBuilding.svg";
import LightOfficeBuilding from "../assets/LightOfficeBuilding.svg";
import UserDataInterface from "./Interface";

interface UserSocialProps {
  darkMode: boolean;
  renderInfo: any;
  user: UserDataInterface | undefined;
}

const UserSocial = ({ darkMode, renderInfo, user }: UserSocialProps) => {
  const infoSections = [
    {
      label: darkMode ? (
        <img src={Location} alt="Location" />
      ) : (
        <img src={LightLocation} alt="LightLocation" />
      ),
      value: user?.location,
    },
    {
      label: darkMode ? (
        <img src={GithubUrl} alt="Location" />
      ) : (
        <img src={LightGithubUrl} alt="LightGithubUrl" />
      ),
      value: user?.blog,
    },
    {
      label: darkMode ? (
        <img src={Twitter} alt="Location" />
      ) : (
        <img src={LightTwitter} alt="LightTwitter" />
      ),
      value: <a>{user?.twitter_username}</a>,
    },
    {
      label: darkMode ? (
        <img src={OfficeBuilding} alt="Location" />
      ) : (
        <img src={LightOfficeBuilding} alt="LightOfficeBuilding" />
      ),
      value: user?.company,
    },
  ];
  return (
    <div className="dark:text-[#4B6A9B]">
      <div className="md:items-center md:grid md:grid-cols-2">
        {infoSections.map((section, index) => (
          <React.Fragment key={index}>
            {renderInfo(section.label, section.value)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UserSocial;
