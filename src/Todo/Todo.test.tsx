import React from 'react';
import {
  render,
  fireEvent,
  getAllByTestId,
  wait
} from '@testing-library/react';
import Todo from './Todo';

test('renders itself', () => {
  const { container } = render(<Todo />);
  expect(container.children.length).toBe(1);
});

test('renders initial todos', () => {
  const { getByTestId } = render(<Todo />);
  const todos = getByTestId('todos');
  expect(todos.children.length).toBe(2);
});

test('it adds a new todo', async () => {
  const { getByTestId, getByText } = render(<Todo />);
  const input = getByTestId('input') as HTMLInputElement;
  const todos = getByTestId('todos');
  const newTodoString = 'A new todo';
  input.value = newTodoString;
  fireEvent.click(getByText('Add Task'));
  await wait(() => getByText(newTodoString));
  expect(input.value).toEqual('');
  expect(todos.children.length).toBe(3);
});

test('it removes a todo', () => {
  const { container, getByTestId } = render(<Todo />);
  const todos = getByTestId('todos');
  const delBtns = getAllByTestId(container, 'delete-button');
  const firstBtn = delBtns[0];
  fireEvent.click(firstBtn);
  expect(todos.children.length).toBe(1);
});

test('removes all todos shows no task message', () => {
  const { container, getByText } = render(<Todo />);
  const delBtns = getAllByTestId(container, 'delete-button');
  const firstBtn = delBtns[0];
  const secondBtn = delBtns[1];
  fireEvent.click(firstBtn);
  fireEvent.click(secondBtn);
  const noTaskMessageString = 'No task!';
  const noTaskMessage = getByText(noTaskMessageString);
  expect(noTaskMessage.textContent).toBe(noTaskMessageString);
});
