import * as conants from './constants'
import {fromJS} from 'immutable'


const defaultState=fromJS({
    login:false
 })


export default (state=defaultState,action)=>{
    switch (action.type) {
        case conants.CHANGE_LOGIN:
            return state.set('login',action.value)
        case conants.CHANGE_LOGINOUT:
            return state.set('login',action.value)
         default:
            return state
    }
}
