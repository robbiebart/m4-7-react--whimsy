import React, { createContext, useState } from "react";
import avatar from "../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = createContext(null);

const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = new Date();
  const formattedDate = moment(date).format("hh:mm a - MMM Do, YYYY");
  console.log("date", date);
  console.log("formdate", formattedDate);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    isLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
  };

  const handleToggleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    isRetweeted
      ? setNumOfRetweets(numOfRetweets - 1)
      : setNumOfRetweets(numOfRetweets + 1);
  };

  return (
    <TweetContext.Provider
      value={{
        date: formattedDate,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        handleToggleRetweet,
        handleToggleLike,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

// const TweetContext = useContext(null);

export default TweetProvider;
