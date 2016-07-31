let nextId = 0;

let createChunk = function ({ data, start, end }) {
  return { id: nextId++, data, start, end };
};

let initialState = [
  createChunk ({data: 'text1', start: 0, end: 1}),
  createChunk ({data: 'text2', start: 1, end: 2}),
  createChunk ({data: 'text3', start: 2, end: 3}),
];
const texts = (state = initialState, action) => {
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
