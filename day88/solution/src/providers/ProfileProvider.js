import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

const DEFAULT_USER = {
  name: "Anonymous Squirrel",
  icon: "🐿",
};

const ProfileProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);

  return (
    <ProfileContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
