import { makeVar, TypePolicy } from "@apollo/client";

export const completedTodos = makeVar<string[]>([]) 
export const touchedTodos = makeVar<string[]>([])


export const TodoTypePolicies: TypePolicy = {
    fields: {
        selected: {
            read(selected, options) {
                const fieldId = options.readField('id');

                return completedTodos().filter(id => id === fieldId).length > 0;
            },
        },
        touched: {
            read(_, options) {
                const fieldId = options.readField('id');

                return touchedTodos().filter(id => id === fieldId).length > 0;
            },
            merge(_, options) {
                console.log(options)
            }
        }
    }
}