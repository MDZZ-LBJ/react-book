import * as constants from './constants'
import {fromJS} from 'immutable'


// 设置初始值 为 immutable 对象
// 这里只是将 defaultState 内部的属性值变为immutable 对象
// 而 defaultState 整体还是个js对象
// 这就是为什么组件中获取要 state.header.get() 前面是 .属性名获取 后面是.get()方法获取
// 因为 state整体是 js 对象 只有focused是immutable 对象
const defaultState=fromJS({
    focused: false
})

export default (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOUCS){
        // 调用 set方法修改值 返回给store
        return state.set('focused',true)
        // immutable 对象的set 方法会结合之前immutable 对象
        // 和设置的值 生成一个新的immutable 对象。并不会直接改变当前的immutable 对象
    }
    if(action.type===constants.SEARCH_BLUR){
        return state.set('focused',false)
    }
    return state
}
