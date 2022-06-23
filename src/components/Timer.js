import React, { useEffect, useState } from 'react'

function Timer(props) {

  const { tom } = props;
  const [timer, setTimer] = useState();
  const [tomorrow] = useState(tom);

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
    const interval = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  });

  const getTime = () => {
    let { total, hours, minutes, seconds } = getTimeRemaining();
    if(total >= 0){
      setTimer(
        (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      )  
    }
  }

  if(tomorrow) {
    return (
      <>
        {timer}
      </>
    );
  }

}

export default Timer;