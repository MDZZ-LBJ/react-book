import * as conants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const changeDetail=(title,content)=>({
    type: conants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail1.json?id='+id).then((res)=>{
            const {title,content}=res.data.data
            const action=changeDetail(title,content)
            dispatch(action)
        })
    }
}
