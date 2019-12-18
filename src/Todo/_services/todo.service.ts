export const onRemoveTodo = (
  todos: { id: number; item: string }[],
  id: number
): { id: number; item: string }[] => todos.filter(todo => todo.id !== id);

export const onAddTodo = (
  todos: { id: number; item: string }[],
  data: string
): { id: number; item: string }[] => [
  ...todos,
  {
    id: todos.length + 1,
    item: data
  }
];
