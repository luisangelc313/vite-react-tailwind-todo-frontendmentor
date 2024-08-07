import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="rounded-t-md overflow-hidden bg-white [&>article]:p-4 mt-8 dark:bg-gray-800 transition-all duration-1000"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  updateTodo={updateTodo}
                  removeTodo={removeTodo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
