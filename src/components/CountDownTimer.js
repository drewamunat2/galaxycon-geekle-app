import React, { useEffect, useState } from 'react';
import { useCountdown } from '.././hooks/useCountdown';

function CountdownTimer() {
  const [tomorrow, setTomorrow] = useState({});
  const [hours, minutes, seconds] = useCountdown(tomorrow);

  useEffect(() => {
    let today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDay() + 1;
    setTomorrow(new Date(year, month, day));
  });

  const getCountDown = () => {
    return(
      (hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':'
      + (seconds > 9 ? seconds : '0' + seconds)
    );
  }
 
    return (
      <>
        {getCountDown()}
      </>
    );
  
}

export default CountdownTimer;