export const removeItemFromList = <T, K extends keyof T>(
  list: T[],
  propName: K,
  propValue: T[K]
): T[] => list.filter(item => item[propName] !== propValue);

export const addItemToList = <T>(list: T[], newItem: T) => [...list, newItem];
