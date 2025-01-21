import { createContext } from "react";

type ActiveTodoListIdContextType = {
    activeID: number;
    setActiveID: ((activeID: number) => void)  | undefined;
}
const ActiveTodoListIdContext = createContext<ActiveTodoListIdContextType>({
    activeID: 0,
    setActiveID: undefined,
});

export default ActiveTodoListIdContext;