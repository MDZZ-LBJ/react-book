import React , {Component} from 'react'
import {HomeWrapper,HomeLeft, HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'
import axios from 'axios'
import {connect} from "react-redux";


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
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data
            const action={
                type:'change_home_data',
                topicList:result.topicList,
                articleList:result.articleList,
                recommentList:result.recommentList
            }
            this.props.changeHomeData(action)
        })
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeHomeData(action){
           dispatch(action)
        },
    }
}


export default connect(null,mapDispatchToProps)(Home)
