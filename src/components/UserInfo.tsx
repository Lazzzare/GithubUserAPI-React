// UserInfo.js
import React from "react";
import UserDataInterface from "./Interface";
import UserBio from "./UserBio";
import UserRFF from "./UserRFF";
import UserSocial from "./UserSocial";
import UserInfoHeader from "./UserInfoHeader";

interface UserInfoProps {
  user: UserDataInterface | undefined;
  darkMode: boolean;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, darkMode }) => {
  const getFormattedDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const renderInfo = (label: JSX.Element, value: string | undefined) => (
    <div className="flex flex-row gap-x-[19px] items-center mb-4">
      {darkMode ? label : label}
      <p>{value || "Not Available"}</p>
    </div>
  );

  return (
    <div className={`${!darkMode ? "dark" : ""} pb-7`}>
      <div className="mt-4 pt-8 px-6  pb-[49px] bg-[#1E2A47] dark:bg-[#FEFEFE] rounded-[15px]">
        {/* UserImage/Name/JointedTime */}
        <UserInfoHeader user={user} getFormattedDate={getFormattedDate} />
        {/* Bio */}
        <UserBio user={user} />
        {/* RFF */}
        <UserRFF user={user} />
        {/* Info */}
        <UserSocial darkMode={darkMode} renderInfo={renderInfo} user={user} />
      </div>
    </div>
  );
};

export default UserInfo;
