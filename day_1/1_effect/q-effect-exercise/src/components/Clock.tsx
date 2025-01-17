import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
      <h3>Clock</h3>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
