import React, { useEffect, useState } from 'react'

function Timer() {

  const [tomorrow, setTomorrow] = useState({});
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = () => {
    const total = tomorrow - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    console.log(total, hours, minutes, seconds);
    return {
        hours, minutes, seconds
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let today = new Date();
      let day = today.getDate() + 1;
      let tom = new Date();
      tom.setDate(day);
      tom.setHours(0);
      tom.setMinutes(0)
      tom.setSeconds(0);
      tom.setMilliseconds(0);

      console.log(tom)
      setTomorrow(tom);
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  });

  const getTime = () => {
    let { hours, minutes, seconds } 
      = getTimeRemaining();
    
    setTimer(
      (hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':'
      + (seconds > 9 ? seconds : '0' + seconds)
    )  
  }

  return (
    <>
      {timer}
    </>
  );

}

export default Timer;