import * as conants from './constants'
import {fromJS} from 'immutable'


const defaultState=fromJS({
    title:'',
    content:'',
 })


export default (state=defaultState,action)=>{
    switch (action.type) {
        case conants.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content:action.content,
            })
         default:
            return state
    }
}
