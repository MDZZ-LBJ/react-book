
// 调用合并 reducer 的方法
import {combineReducers} from "redux"

import {headerReducer} from '../common/header/store'


// 暴露合并之后的大的 Reducer 对象 key值可以随便取

const Reducer=combineReducers({
                header:headerReducer
            })

export default  Reducer
