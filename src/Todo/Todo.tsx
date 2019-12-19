import React, { useRef, useState } from 'react';
import { addItemToList, removeItemFromList } from './_services';

type Props = {};

const Todo: React.FC<Props> = props => {
  const [todos, setTodos] = useState([
    { id: 1, item: 'Fix bugs' },
    { id: 2, item: 'Take out the trash' }
  ]);

  const todoRef = useRef<any>();

  const removeTodo = (id: number) => {
    const udpatedTodos = removeItemFromList(todos, 'id', id);
    setTodos(udpatedTodos);
  };

  const addTodo = (data: string) => {
    const newTodo = { id: todos.length + 1, item: data };
    const updatedTodos = addItemToList(todos, newTodo);
    setTodos(updatedTodos);
  };

  const handleNewTodo = (e: any) => {
    e.preventDefault();
    const item = todoRef.current;
    addTodo(item.value);
    item.value = '';
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Add Todo</h2>
        </div>
      </div>
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <input
              type='text'
              autoFocus
              ref={todoRef}
              placeholder='Enter a task'
              className='form-control'
              data-testid='input'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <button
              type='submit'
              onClick={handleNewTodo}
              className='btn btn-primary'
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
      <div className='row todo-list'>
        <div className='col-md-6'>
          <h3>Lists</h3>
          {!todos.length ? (
            <div className='no-task'>No task!</div>
          ) : (
            <ul data-testid='todos'>
              {todos.map(todo => {
                return (
                  <li key={todo.id}>
                    <div>
                      <span>{todo.item}</span>
                      <button
                        className='btn btn-danger'
                        data-testid='delete-button'
                        onClick={() => removeTodo(todo.id)}
                      >
                        X
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
