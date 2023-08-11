import UserDataInterface from "./Interface";
interface UserInfoHeader {
  user: UserDataInterface | undefined;
  getFormattedDate: (user: string) => void;
}

const UserInfoHeader = ({ user, getFormattedDate }: UserInfoHeader) => {
  return (
    <div className="flex flex-row gap-x-5 mb-[33px] md:items-center">
      <img
        src={user ? user.avatar_url : "Not Found"}
        alt="avatar"
        className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-white dark:text-[#2B3442] font-bold text-base md:text-[26px]">
          {user ? user.name : "not found"}
        </h1>
        <span className="text-[#0079FF] text-[13px] md:text-base">
          @{user ? user.login : "not found"}
        </span>
        <h3 className="text-[13px] text-white dark:text-[#4B6A9B] mt-[6px] md:text-[15px]">
          {user ? `Joined ${getFormattedDate(user.created_at)}` : "not found"}
        </h3>
      </div>
    </div>
  );
};

export default UserInfoHeader;
