
import {fromJS} from 'immutable'

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommentList:[]
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        case 'change_home_data':
            return state.merge({
                topicList:fromJS(action.topicList) ,
                articleList:fromJS(action.articleList) ,
                recommentList:fromJS(action.recommentList) ,

            })
        default:
            return state
    }
}
