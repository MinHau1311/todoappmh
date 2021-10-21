import React, {memo} from "react"
import ToDo from "./ToDo"

const ToDoList = memo (props => {
    return (
        <section className="main">
            <input className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                <ToDo/>
            </ul>
        </section>
    )
})

export default ToDoList