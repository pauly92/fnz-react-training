/** SOURCE: https://react.dev/learn/reusing-logic-with-custom-hooks */

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};


export const SaveButton = () => {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

/**
 * Custom Hooks let you share stateful logic, not state itself!
 * The two function components have two separate state variables and Effects!
 * They have the same value because they both depend on the network status.
 * 
 */


