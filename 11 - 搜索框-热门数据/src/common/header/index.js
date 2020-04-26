import React , {Component}  from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,
    SearchInfoTitle,SearchInfoSwitch,SearchInfoList,
    SearchInfoItem} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";
import {actionCreators}  from './store'

class Header extends Component{
    render() {
        return(
            <HeaderWrapper>
                <Logo  />
                <Nav  >
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont iconziti"  ></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={ this.props.focused ? ' iconfont iconfangdajing focused ' : 'iconfont iconfangdajing'}
                        ></i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont iconpen"  ></i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea=(show)=>{
        if(show){
            return <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        this.props.list.map(v=>{
                            return <SearchInfoItem key={v}>{v}</SearchInfoItem>
                        })
                    }
                </SearchInfoList>
            </SearchInfo>
        }else {
            return null
        }
    }

}


const mapStateToProps = (state)=>{
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            const action=actionCreators.searchFocus()
            dispatch(action)
            // 派发获取热门搜索的数据
            const ListAction=actionCreators.getList()
            dispatch(ListAction)
        },
        handleInputBlur(){
            const action=actionCreators.searchBlur()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
