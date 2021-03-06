import React , {Component} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from "react-redux";
import {actionCreators} from "./store";

import {withRouter }  from 'react-router-dom'

class Detail extends Component{
    render() {
        const {title,content,}=this.props
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        // 获取动态路由传参 location
        const id=this.props.location.search.split('?id=')[1]
        this.props.getDetail( id)
    }
}


const mapStateToProps=(state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content'),
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getDetail(id){
            const action=actionCreators.getDetail(id)
            dispatch(action)
        },

    }
}


                                             // 让detail组件有能力获取路由中的所有内容
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))
