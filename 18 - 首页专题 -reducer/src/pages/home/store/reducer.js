
import {fromJS} from 'immutable'

const defaultState=fromJS({
    topicList:[
           {id:1,title:'科比'},
           {id:2,title:'詹姆斯'},
           {id:3,title:'韦德'},
           {id:4,title:'欧文'},
           {id:5,title:'哈登'},
           {id:6,title:'杜兰特'},
           {id:7,title:'库里'},
           {id:8,title:'利拉德'},
           {id:9,title:'乔治'},
           {id:10,title:'塔克'},
           {id:11,title:'布克'},
           {id:12,title:'乔丹'},
        ]
})


export default (state=defaultState,action)=>{
    switch (action.type) {
        default:
            return state
    }
}
