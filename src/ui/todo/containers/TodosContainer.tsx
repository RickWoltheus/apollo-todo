import { addCompletedTodo, removeCompletedTodo } from "../../../data/todo/operations/todoMutations";
import { useTodosQuery } from "../../../generated/graphql";
import { TodoList } from "../components/TodoList";


export default function TodoContainer() {
    const todos = useTodosQuery()

  return (
        <TodoList 
            loading={todos.loading} 
            items={todos.data?.todos ?? []} 
            onTodoAdd={(id) => addCompletedTodo(id)}
            onTodoRemove={(id) => removeCompletedTodo(id)}
        />
    );
}


