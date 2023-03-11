import { useState } from "react"

type TodoItem = {
    id: string,
    title: string,
    body: string,
    isComplete: boolean
}

const Todo: React.FC = () => {
    const [todoList, setTodoList] = useState<TodoItem[]>([
        {
            id: "1",
            title: "Go to shop",
            body: "Go get eggs and milk",
            isComplete: true
        }
    ])

    const handleMarkComplete = (id: string) => {
        const newTodos = todoList.map((todo) => {
          if (todo.id === id) {
            return {...todo, isComplete: !todo.isComplete};
          }
          return todo;
        });
        
        setTodoList(newTodos);
      };

    return (
        <div>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Is Complete</th>
                </thead>
                <tbody>
                    {todoList.map(todo => {
                        return (
                            <tr>
                                <td>{todo.title}</td>
                                <td>{todo.body}</td>
                                <td><input type="checkbox" data-is-checked={todo.isComplete} checked={todo.isComplete} onChange={() => {
                                    handleMarkComplete(todo.id)
                                }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Todo;