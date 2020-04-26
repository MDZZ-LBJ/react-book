import React , {Component}  from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,
    SearchInfoTitle,SearchInfoSwitch,SearchInfoList,
    SearchInfoItem} from './style'
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux";
import {actionCreators}  from './store'

class Header extends Component{
    render() {
        const {focused,handleInputFocus,handleInputBlur}=this.props
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
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i
                            className={focused ? ' iconfont iconfangdajing focused ' : 'iconfont iconfangdajing'}
                        ></i>
                        {this.getListArea()}
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

    getListArea=()=>{
        const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props
        const  newList=list.toJS() // list为immutable类型 转化为js类型才能 [属性名]
        const  pageList=[]
        if(newList.length){
            for(let i =(page-1)*10 ;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
             >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage)}}>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
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
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
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
        },
        handleMouseEnter(){
            const action=actionCreators.mouseEnter()
            dispatch(action)
        },
        handleMouseLeave(){
            const action=actionCreators.mouseLeave()
            dispatch(action)
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                page+=1
            }else {
                page=1
            }
            const action=actionCreators.changePage(page)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
