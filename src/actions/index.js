export const addText = (text, start, end) => {
  return {
    type: 'ADD_TEXT',
    text,
    start,
    end
  }
}
