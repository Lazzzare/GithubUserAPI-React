import UserDataInterface from "./Interface";
interface UserInfoHeader {
  user: UserDataInterface | undefined;
}

const UserBio = ({ user }: UserInfoHeader) => {
  return (
    <div>
      {user ? (
        user.bio ? (
          <p className=" text-white dark:text-[#4B6A9B] text-[15px] leading-6">
            {user.bio}
          </p>
        ) : (
          <p className="text-center text-white dark:text-[#4B6A9B] text-[15px] leading-6">
            This profile has no bio
          </p>
        )
      ) : (
        "not found"
      )}
    </div>
  );
};

export default UserBio;
