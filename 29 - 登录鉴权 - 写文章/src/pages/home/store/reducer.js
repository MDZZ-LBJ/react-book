import * as conants from './constants'
import {fromJS} from 'immutable'


const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommentList:[],
    articlePage:1,
    showScroll:false
})


const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList) ,
        articleList:fromJS(action.articleList) ,
        recommentList:fromJS(action.recommentList) ,
    })
}

const addArticleList=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.list) ,
        articlePage:action.nextPage,
    })
}

export default (state=defaultState,action)=>{
    switch (action.type) {
        case conants.CHANGE_HOME_DATA:
            return  changeHomeData(state,action)
        case conants.ADD_ARTICLE_list:
            return  addArticleList(state,action)
        case conants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
         default:
            return state
    }
}
