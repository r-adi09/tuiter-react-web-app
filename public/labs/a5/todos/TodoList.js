import todos from "./todos.js";
import TodoItem from "./TodoItem.js";
/*const TodoList = () => {
    return(`
        <ul>
            <li>Buy milk</li>
            <li>Pickup the kids</li>
            <li>Walk the dog</li>
        </ul>
    `);
}
export default TodoList;*/
const TodoList = () => {
    return(`
        <ul>
            ${
        todos.map(todo => {
            return(TodoItem(todo));
        }).join('')
    }
        </ul>
    `);
}
export default TodoList;