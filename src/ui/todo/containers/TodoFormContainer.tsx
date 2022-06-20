import { useState } from "react";
import { Todo, useTodosQuery, useUpdateTodoMutation } from "../../../generated/graphql";
import { TodoForm } from "../components/TodoForm";

interface Props {
    todo: Todo
}

export const TodoFormContainer: React.FunctionComponent<Props> = ({ todo }) => {
const [mutate, {loading, error}] = useUpdateTodoMutation()

    if(error) {
        return<> {error.message}</>
    }
  return (
        <>
            <TodoForm todo={todo} loading={loading} onComplete={data => {
                console.log(data)
              return mutate({ variables: { id: todo.id, input: data } });
          }} />
        </>

    );
}


