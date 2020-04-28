import * as conants from './constants'
import {fromJS} from 'immutable'


const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommentList:[]
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        case conants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList) ,
                articleList:fromJS(action.articleList) ,
                recommentList:fromJS(action.recommentList) ,

            })
        default:
            return state
    }
}
