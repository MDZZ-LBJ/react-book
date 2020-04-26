
// 现在从redux-immutable 获取combineReducers
import {combineReducers} from "redux-immutable"

import {headerReducer} from '../common/header/store'

  // 此时的reducer就是immutable 对象了
const Reducer=combineReducers({
                header:headerReducer
            })

export default  Reducer
