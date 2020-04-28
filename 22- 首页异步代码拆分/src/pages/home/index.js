import React , {Component} from 'react'
import {HomeWrapper,HomeLeft, HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'
import {connect} from "react-redux";
import {actionCreators} from './store'

class Home extends Component{
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={require('../../statics/banner.jpg')} alt=""/>
                    <Topic />
                    <List />
                 </HomeLeft>
                <HomeRight>
                    <Recomment />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeHomeData(){
            const action=actionCreators.getHomeInfo()
            dispatch(action)
        },
    }
}


export default connect(null,mapDispatchToProps)(Home)
