import axios from 'axios'
import * as conants from './constants'
import {fromJS} from 'immutable'

const changeHomeData=(result)=>({
        type:conants.CHANGE_HOME_DATA,
        topicList:result.topicList,
        articleList:result.articleList,
        recommentList:result.recommentList
})

const addHomeList=(list,nextPage)=>({
    type:conants.ADD_ARTICLE_list,
    list:fromJS(list),
    nextPage:nextPage
})

export const getHomeInfo=()=>{
     return (dispatch)=>{
         axios.get('/api/home.json').then((res)=>{
             const result=res.data.data
             const action=changeHomeData(result)
             dispatch(action)
         })
     }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data
            const action=addHomeList(result,page+1)
            dispatch(action)
        })
    }
}
export const toggleTopShow=(show)=>({
    type: conants.TOGGLE_SCROLL_TOP,
    show
})