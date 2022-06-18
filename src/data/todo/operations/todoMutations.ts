import { completedTodos, touchedTodos } from "../cache/todoCache";

export function addCompletedTodo(todoId: string) {
    const todos = completedTodos()
    if(todos.find(id => id === todoId)) {
        return
    }
    completedTodos([...todos, todoId]);
}

export function removeCompletedTodo(todoId: string) {
    completedTodos(completedTodos().filter(id => id !== todoId));
}


export function addTouchedTodo(todoId: string) {
    const todos = touchedTodos()
    if(todos.find(id => id === todoId)) {
        return
    }
    touchedTodos([...todos, todoId]);
}

export function removeTouchedTodo(todoId: string) {
    touchedTodos(touchedTodos().filter(id => id !== todoId));
}
