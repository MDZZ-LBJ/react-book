import React , {Component} from 'react'
import {ListItem, ListInfo ,LoadMore} from '../style'
import {connect} from "react-redux";
import {actionCreators} from "../store";

class List extends Component{
    render() {
        const {articleList,getMoreList,page}=this.props
        return(
           <div>
               {
                       articleList.map((item,index)=>{
                       return (
                           <ListItem key={index}>
                               <img className='pic'  src={require('../../../statics/listPic.png')} alt='' />
                               <ListInfo>
                                   <h3 className='title'>{item.get('title')}</h3>
                                   <p className='desc'>{item.get('desc')}</p>
                               </ListInfo>
                           </ListItem>
                       )
                   })
               }
               <LoadMore onClick={()=>{getMoreList(page)}}>加载更多</LoadMore>
           </div>

        )
    }
}

const mapStateToProps=(state)=>({
    articleList:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage']),
})
const mapDispatchToProps=(dispatch)=>{
    return{
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)

