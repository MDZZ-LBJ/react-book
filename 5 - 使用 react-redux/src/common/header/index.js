import React  from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";


const Header=(props)=>{
    return(
        <HeaderWrapper>
            {/* <Logo href='/'/>*/}
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
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i
                        className={ props.focused ? ' iconfont iconfangdajing focused ' : 'iconfont iconfangdajing'}
                    ></i>
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




const mapStateToProps = (state)=>{
    return{
        focused:state.focused
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleInputFocus(){
            const action={
                type:'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            }
            dispatch(action)
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Header)
