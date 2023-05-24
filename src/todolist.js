
import "./todolist.css"
function Todolist(props) {
    return(
      <li>
      {props.children}
    </li>
    )
  }
  export {Todolist};