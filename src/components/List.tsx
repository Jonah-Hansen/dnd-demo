import { Draggable } from "react-beautiful-dnd";
import Item from "./Item";

interface todo {
  content: string
}
interface Ilist {
  title: string,
  order: number,
  todos: todo[]
}

export default function List({ list }: { list: Ilist }) {
  return (
    // draggable contains the components that can be dragged.
    <Draggable draggableId={list.title} index={list.order}>
      {(provided, snapshot) => (

        //this is the actual component to be dragged
        <div ref={provided.innerRef} className="list" {...provided.draggableProps} {...provided.dragHandleProps} >

          <h2>{list.title}</h2>
          <ul className="list__items">
            {list.todos.map((todo, index) => <Item key={index} content={todo.content} />)}
          </ul>
        </div>
      )}
    </Draggable>
  )
}