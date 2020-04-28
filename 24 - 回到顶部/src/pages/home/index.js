import React , {Component} from 'react'
import {HomeWrapper,HomeLeft, HomeRight,BackTop} from './style'
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
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : ''
                }
            </HomeWrapper>
        )
    }
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToProps=(state)=>({
    showScroll:state.get('home').get('showScroll')
})


const mapDispatchToProps=(dispatch)=>{
    return{
        changeHomeData(){
            const action=actionCreators.getHomeInfo()
            dispatch(action)
        },
        changeScrollTopShow(e){
            if(document.documentElement.scrollTop>400){
                const action=actionCreators.toggleTopShow(true)
                dispatch(action)
            }else {
                const action=actionCreators.toggleTopShow(false)
                dispatch(action)
            }
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
