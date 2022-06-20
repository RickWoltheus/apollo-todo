import { Todo, TodoUpdateInputSchema } from "../../../generated/graphql"
import {useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useReducer } from "react"
import { z } from 'zod'
import {objectKeys} from '../../core/utils/objects'


interface TodoFormProps {
    todo: Todo
    onComplete: (data: z.infer<ReturnType<typeof TodoUpdateInputSchema>>) => void
    loading: boolean
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    
    return (
        <Form key={props.todo.id} {...props} />
    )
}



const Form: React.FC<TodoFormProps> = ({todo, loading, onComplete}) => {
    const schema = TodoUpdateInputSchema()
    const { register, handleSubmit, formState: { errors } } = useForm({ 
            resolver: zodResolver(schema), 
            defaultValues: todo
    });
   
    return (
        <form onSubmit={handleSubmit(onComplete)} key={todo.id}>
            {objectKeys(schema.shape).map((key) => (
                <React.Fragment key={key}>
                    <input {...(register as any)(key)} disabled={loading} />
                    <p>{errors[key]?.message}</p>
                </React.Fragment>
            ))}
            {loading ? 'loading...' :  <input type="submit" />}
        </form>
    )
}

