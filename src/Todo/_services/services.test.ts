import { onAddTodo, onRemoveTodo } from './todo.service';

test('onRemoveTodo', () => {
  const todos: { id: number; item: string }[] = [
    { id: 1, item: 'test1' },
    { id: 2, item: 'test2' }
  ];
  const id: number = 1;
  const result = onRemoveTodo(todos, id);
  expect(result.length).toBe(1);
});

test('onAddTodo', () => {
  const todos: { id: number; item: string }[] = [
    { id: 1, item: 'test1' },
    { id: 2, item: 'test2' }
  ];
  const data: string = 'test3';
  const result: { id: number; item: string }[] = onAddTodo(todos, data);
  expect(result.length).toBe(3);
});
