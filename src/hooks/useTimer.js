import { useState } from "react";

const useTimer = (tommorrow) => {

  const [timer, setTimer] = useState("00:00:00");
  
  let { hours, minutes, seconds } = getTimeRemaining();
  
  setTimer(
    (hours > 9 ? hours : '0' + hours) + ':' +
    (minutes > 9 ? minutes : '0' + minutes) + ':'
    + (seconds > 9 ? seconds : '0' + seconds)
  );
  
  

  const getTimeRemaining = () => {
    const total = tomorrow - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      hours, minutes, seconds
    };
  }

  return {getTimeRemaining};
}

export default useTimer;