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
    onClick: (id) => {
      dispatch(addText())
    }
  }
}

const TodoList = ({ texts, onClick }) => (
  <ul>
    {texts.map(text => <div onClick={() => onClick('new text')}>{text}</div>)}
  </ul>
)


const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoList)

export default VisibleTodoList
