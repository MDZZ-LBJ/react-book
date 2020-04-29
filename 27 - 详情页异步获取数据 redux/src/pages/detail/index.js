import React , {Component} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {connect} from "react-redux";
import {actionCreators} from "./store";

class Detail extends Component{
    render() {
        const {title,content}=this.props
        return(
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail()
    }
}


const mapStateToProps=(state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content'),
})

const mapDispatchToProps=(dispatch)=>{
    return{
        getDetail(){
            const action=actionCreators.getDetail()
            dispatch(action)
        },

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Detail)
