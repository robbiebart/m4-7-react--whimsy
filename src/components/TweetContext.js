import React, { createContext } from "react";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

const TweetProvider = ({ children }) => {
  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: { avatar },
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

// const TweetContext = useContext(null);

export default TweetProvider;
