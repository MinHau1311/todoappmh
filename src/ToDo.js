import React, {memo} from "react"

const ToDo = memo(props => {

    return(
        <li className = "view">
            <input className = "toggle" />
            <label>Todo</label>
            <button className = "destroy"> </button>
        </li>
    )
})

export default ToDo