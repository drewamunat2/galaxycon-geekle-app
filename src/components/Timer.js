import React, { useEffect, useState } from 'react'

function Timer() {

  const [tomorrow, setTomorrow] = useState({});

  const getTimeRemaining = () => {
    const total = tomorrow - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
  }

  useEffect(() => {
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
  }, []);

  const getTime = () => {
    let { total, hours, minutes, seconds } 
      = getTimeRemaining();
    if (total >= 0) {

    // update the timer
    // check if less than 10 then we need to 
    // add '0' at the beginning of the variable
      return(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )
    } 
  }

  return (
    <>
      {getTime()}
    </>
  );

}

export default Timer;