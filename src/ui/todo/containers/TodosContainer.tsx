import { useState } from "react";
import { addCompletedTodo, removeCompletedTodo } from "../../../data/todo/operations/todoMutations";
import { Todo, useTodosQuery } from "../../../generated/graphql";
import { TodoList } from "../components/TodoList";


export default function TodoContainer() {
    const todos = useTodosQuery()
    const [todo, setTodo] = useState<Todo | undefined>(undefined)

    return (
            <>
                <TodoList 
                    loading={todos.loading} 
                    items={todos.data?.todos ?? []} 
                    onTodoAdd={(id) => addCompletedTodo(id)}
                    onTodoRemove={(id) => removeCompletedTodo(id)}
                    onEdit={(id) => setTodo(todos.data?.todos.find(todo => todo.id === id) ?? undefined)}
                />
            </>

        );
}


