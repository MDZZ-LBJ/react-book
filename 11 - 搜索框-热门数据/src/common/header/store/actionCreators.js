
import * as constants from './constants'
import axios from 'axios'
import {fromJS} from "immutable";

export const searchFocus = () =>({
    type:constants.SEARCH_FOUCS
})

export const searchBlur = () =>({
    type:constants.SEARCH_BLUR
})

const changeList= (data) =>({
    type:constants.CHANGE_LIST,
    data: fromJS(data) // 传入immutable类型的data 因为reducer中的list也是immutable类型
})

export const  getList = () =>{
    return (dispatch)=>{
      axios.get('/api/headerList.json').then((res)=>{
            const  action=changeList(res.data.data)
            dispatch(action)
        }).catch(()=>{
            console.log('error')
        })
    }
}















