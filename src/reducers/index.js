import { combineReducers } from 'redux'
import chunks from './chunks'
import current from './current'
import video from './video'
import mode from './mode'

const app = combineReducers({
  chunks,
  current,
  video,
  mode,
})

export default app
