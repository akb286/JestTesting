export const addItem = (name) => {
  return { type: 'ADD_ITEM', name }
}

export const removeItem = (index) => {
  return { type: 'REMOVE_ITEM', index }
}
