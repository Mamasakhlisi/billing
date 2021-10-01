import {combineReducers} from 'redux'

import { chartReducer } from './duck/dashboard/chart'
import { tabsReducer } from './duck/dashboard/tabs'
import { exchangeRateReducer } from './duck/dashboard/exchangeRate'

export const rootReducer = combineReducers({
    chart:chartReducer,
    tabs:tabsReducer,
    exchangeRate:exchangeRateReducer
})