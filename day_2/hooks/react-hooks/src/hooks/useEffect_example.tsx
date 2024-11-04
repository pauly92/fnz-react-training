import { useEffect, useState } from "react";

/**
 *  Do things after your component renders
 */
export const Interval = () => {
  const [interval, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <>Interval: {interval}</>;
};
