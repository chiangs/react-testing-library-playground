import { addItemToList, removeItemFromList } from './todo.service';

test('removeItemFromList', () => {
  type GenericObj = { id: number; item: string };
  const genericList: GenericObj[] = [
    { id: 1, item: 'test1' },
    { id: 2, item: 'test2' }
  ];
  const propNameToMatch: keyof GenericObj = 'id';
  const propValieToMatch: number = 1;
  const result = removeItemFromList(
    genericList,
    propNameToMatch,
    propValieToMatch
  );
  expect(result.length).toBe(1);
});

test('addItemToList', () => {
  type GenericObj = { id: number; item: string };
  const newItem: GenericObj = {
    id: 3,
    item: 'test3'
  };
  const genericList: GenericObj[] = [
    { id: 1, item: 'test1' },
    { id: 2, item: 'test2' }
  ];
  const result: GenericObj[] = addItemToList(genericList, newItem);
  expect(result.length).toBe(3);
});
