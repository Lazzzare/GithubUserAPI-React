import UserDataInterface from "./Interface";
interface UserInfoHeader {
  user: UserDataInterface | undefined;
}

const UserRFF = ({ user }: UserInfoHeader) => {
  return (
    // RFF - Repos / Followers / Following
    <div className="mt-[23px] md:mt-8 mb-6 md:mb-[30px] py-[19px] md:py-[15px] px-[15px] font-bold bg-[#141D2F] dark:bg-[#F6F8FF] text-[11px] md:text-[13px] flex flex-row justify-around md:text-left text-center rounded-[10px]">
      <div>
        <h1 className="dark:text-[#4B6A9B]">Repos</h1>
        <span className="md:text-[22px] dark:text-[#2B3442]">
          {user?.public_repos || "Not Available"}
        </span>
      </div>
      <div>
        <h1 className="dark:text-[#4B6A9B]">Followers</h1>
        <span className="md:text-[22px] dark:text-[#2B3442]">
          {user?.followers || "Not Available"}
        </span>
      </div>
      <div className="md:pr-[96px]">
        <h1 className="dark:text-[#4B6A9B]">Following</h1>
        <span className="md:text-[22px] dark:text-[#2B3442]">
          {user?.following || "Not Available"}
        </span>
      </div>
    </div>
  );
};

export default UserRFF;
