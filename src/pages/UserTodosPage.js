import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserTodosPage = () => {
    const { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then(response => response.json())
            .then(data => {
                setTodos(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading todos...</div>;
    }

    return (
        <div>
            <h1>User Todos</h1>
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    <span>{todo.title}</span>
                    {todo.completed ? (
                        <span style={{ color: "green", marginLeft: "10px" }}>Completed</span>
                    ) : (
                        <span style={{ color: "red", marginLeft: "10px" }}>Incomplete</span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserTodosPage;
