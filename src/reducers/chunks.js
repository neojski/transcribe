let nextId = 0;

let createChunk = function ({ data, start, end }) {
  return { id: nextId++, data, start, end };
};
const texts = (state = [createChunk ({data: 'text', start: 0, end: 1})], action) => {
  switch (action.type) {
    case 'ADD_CHUNK':
      let start = action.start;
      let i;
      for (i = 0; i < state.length; i++) {
        if (state[i].start > start) {
          break;
        }
      }
      return [
        ...state.slice(0, i),
        createChunk (action),
        ...state.slice(i)
      ]
    default:
        return state
  }
}

export default texts
