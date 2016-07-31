import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { setMode, setStart, setEnd, setNoEnd, replay, play, pause, commit } from './actions'
import todoApp from './reducers'
import App from './components/App'
import key from 'keymaster'
import thunk from 'redux-thunk'

key.filter = function () {
  return true;
}

let store = createStore(todoApp, applyMiddleware(thunk));

(function () {
  let dispatch = store.dispatch;

  // keybinding
  let normal = function (combo, f) {
    key(combo, function (e) {
      if (store.getState().mode === 'NORMAL') {
        f(e);
      }
    });
  };

  let insert = function (combo, f) {
    key(combo, function (e) {
      if (store.getState().mode === 'INSERT') {
        f(e);
      }
    });
  };

  insert('esc', () => {
    dispatch(setMode('NORMAL'));
  });

  normal('i', (e) => {
    e.preventDefault();
    dispatch(setMode('INSERT'));
  });

  normal('space', (e) => {
    e.preventDefault();
    let state = store.getState();

    if (state.video.isPlaying) {
      dispatch(setEnd(state.video.currentTime));
      dispatch(pause());
    } else {
      dispatch(play());
    }
  });

  normal('m', () => {
    dispatch(setStart(store.getState().video.currentTime));
  });

  normal('r', () => {
    dispatch(replay());
  });

  normal('c', () => {
    dispatch(commit());
  });
})();


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
