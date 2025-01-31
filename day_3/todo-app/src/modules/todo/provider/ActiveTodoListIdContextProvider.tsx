import { PropsWithChildren, useState } from "react";
import ActiveTodoListIdContext from '@modules/todo/context/ActiveTodoListIdContext';

type ActiveTodoListIdContextProviderProps = PropsWithChildren;

const ActiveTodoListIdContextProvider: React.FC<ActiveTodoListIdContextProviderProps> = ({children}) => {
  const [activeID, setActiveID] = useState(1);

  return (
    <ActiveTodoListIdContext.Provider value={{activeID, setActiveID}}>
       {children}
     </ActiveTodoListIdContext.Provider>
  )
};

export default ActiveTodoListIdContextProvider;