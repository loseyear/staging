import { combineReducers } from 'redux'

import count from './component/count/reducer'

const rootReducer = combineReducers({
  count,
})

export default rootReducer

