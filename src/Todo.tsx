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

    const [newTodoContent, setNewTodoContent] = useState<{title: string, body: string}>({title: "", body: ""});

    const handleMarkComplete = (id: string) => {
        const newTodos = todoList.map((todo) => {
          if (todo.id === id) {
            return {...todo, isComplete: !todo.isComplete};
          }
          return todo;
        });
        
        setTodoList(newTodos);
    };

    const submitNewTodo = () => {
        setTodoList([...todoList, {id: `${Math.floor(Math.random() * 1000)}`, title: newTodoContent.title, body: newTodoContent.body, isComplete: false}])
    }

    return (
        <div>
            <div style={{display: "flex", "flexDirection": "column"}}>
                <h3>Add new todo</h3>
                <label htmlFor="title">Todo Title</label>
                <input type="text" name="title" onChange={(e) => setNewTodoContent({title: e.target.value, body: newTodoContent.body})}/>
                <label htmlFor="title">Todo Body</label>
                <input type="text" name="body" onChange={(e) => setNewTodoContent({title: newTodoContent.title, body: e.target.value})} />
                <button id="submit" onClick={submitNewTodo}>Submit new task</button>
            </div>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Is Complete</th>
                </thead>
                <tbody>
                    {todoList.map(todo => {
                        return (
                            <tr className="todo">
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