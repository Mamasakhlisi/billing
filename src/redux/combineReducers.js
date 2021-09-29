import {combineReducers} from 'redux'

import { chartReducer } from './duck/dashboard/chart'
import { tabsReducer } from './duck/dashboard/tabs'

export const rootReducer = combineReducers({
    chart:chartReducer,
    tabs:tabsReducer
})