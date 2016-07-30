import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { tick, setMode } from './actions'
import todoApp from './reducers'
import App from './components/App'
import Mousetrap from 'mousetrap'

let store = createStore(todoApp);

Mousetrap.bind('i', function () {
  if (store.getState().mode === 'NORMAL') {
    store.dispatch(setMode('INSERT'));
  }
});

Mousetrap.bind('esc', function () {
  store.dispatch(setMode('NORMAL'));
});


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
