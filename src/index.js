import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { setMode, setStart, setEnd, setNoEnd, replay, play, pause, commit } from './actions'
import todoApp from './reducers'
import App from './components/App'
import Mousetrap from 'mousetrap'
import thunk from 'redux-thunk'

let store = createStore(todoApp, applyMiddleware(thunk));

(function () {
  let dispatch = store.dispatch;

  // keybinding
  let normal = function (combo, f) {
    Mousetrap.bind(combo, function () {
      if (store.getState().mode === 'NORMAL') {
        f();
      }
    });
  };

  let insert = function (combo, f) {
    Mousetrap.bind(combo, function () {
      if (store.getState().mode === 'INSERT') {
        f();
      }
    });
  };

  insert('esc', () => {
    dispatch(setMode('NORMAL'));
  });

  normal('i', () => {
    dispatch(setMode('INSERT'));
  });

  normal('space', () => {
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
