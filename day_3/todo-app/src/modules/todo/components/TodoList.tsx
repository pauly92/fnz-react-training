import { TodoItem } from "./TodoItem";

export interface TodoList {
    id: number,
    title: string,
    items: TodoItem[]
}

const TodoList: React.FC = () => {
    return (
        <div></div>
    );
};

export default TodoList;