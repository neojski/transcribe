import React from 'react'
import { connect } from 'react-redux'
import { addText } from '../actions'

const mapStateToProps = (state) => {
  return {
    texts: state.texts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      let rand = Math.random() * 10;
      dispatch(addText('asdf' + rand, rand, rand * 2))
    }
  }
}

const TodoList = ({ texts, onClick }) => (
  <ul>
    {texts.map(line =>
      <div key={line.start} onClick={() => onClick('new text')}>{line.text} ({line.start} - {line.end})</div>
    )}
  </ul>
)


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
