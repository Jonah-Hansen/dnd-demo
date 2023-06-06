import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';
import List from './components/List';
import data from './data.json';
function App() {

  //! note: need to run without strict mode

  //dummy data
  const lists = data.lists

  const handleListDrop = () => {
    // code to update order on backend/state here
  }

  return (
    <div className="App">
      {/* context wraps section of site that contains all dragging and dropping */}
      <DragDropContext onDragEnd={handleListDrop}>
        {/* droppapble contains the container where draggable things exist */}
        <Droppable droppableId='lists' direction="horizontal" >
          {(provided, snapshot) => (
            // this elements is the actual container element
            <div className='lists-container'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* inside this container we can have our draggable components */}
              {lists.map(list => <List key={list.title} list={list} />)}

              {/* dont forget placeholder so components slide to make room for dragging item */}
              {provided.placeholder}
            </div>
          )
          }
        </Droppable >
      </DragDropContext >
    </div >
  );
}

export default App;
