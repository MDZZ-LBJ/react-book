import * as conants from './constants'
import {fromJS} from 'immutable'


const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommentList:[],
    articlePage:1
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        case conants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList) ,
                articleList:fromJS(action.articleList) ,
                recommentList:fromJS(action.recommentList) ,
            })
        case conants.ADD_ARTICLE_list:
            return state.merge({
                 articleList:state.get('articleList').concat(action.list) ,
                 articlePage:action.nextPage,
            })
         default:
            return state
    }
}
