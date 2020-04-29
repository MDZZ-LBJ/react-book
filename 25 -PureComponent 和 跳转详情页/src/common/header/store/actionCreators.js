
import * as constants from './constants'
import axios from 'axios'
import {fromJS} from "immutable";


// 不需要到导出的方法一般放在上面
const changeList= (data) =>({
    type:constants.CHANGE_LIST,
    data: fromJS(data) ,
    totalPage:Math.ceil(data.length / 10) // 总共多少也
})




// 需要导出的方法一般放在下面
export const searchFocus = () =>({
    type:constants.SEARCH_FOUCS
})

export const searchBlur = () =>({
    type:constants.SEARCH_BLUR
})

export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})




export const  getList = () =>{
    return (dispatch)=>{
      axios.get('/api/headerList1.json').then((res)=>{
        const  action=changeList(res.data.data)
            dispatch(action)
        }).catch(()=>{
            console.log('error')
        })
    }
}

export const changePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page
})













