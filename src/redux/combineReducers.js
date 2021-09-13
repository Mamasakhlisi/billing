import {combineReducers} from 'redux'

import { chartReducer } from './duck/dashboard/chart'

export const rootReducer = combineReducers({
    chart:chartReducer
})