import { useCompleteTodoMutation } from "../../../generated/graphql";
import { TodoActions } from "../components/TodoActions";


export default function TodoActionsContainer() {
    const [mutate] = useCompleteTodoMutation()
    
  return (
        <TodoActions 
            onComplete={() => mutate()}
        />
    );

    function CompleteTodo() {
        mutate
    }
}


