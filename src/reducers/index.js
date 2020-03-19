import {combineReducers} from 'redux'
import valueReducer from './valueReducer'

export default combineReducers({
    value: valueReducer
})