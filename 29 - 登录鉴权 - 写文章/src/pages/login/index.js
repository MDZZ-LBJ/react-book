import React , {PureComponent } from 'react'
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {connect} from "react-redux";
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'

class Login extends PureComponent{
    render(){
        const {loginStatus} =this.props
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account=input}}/>
                        <Input placeholder='密码' ref={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/'/>
        }
    }
}


const mapStateToProps=(state)=>({
     loginStatus:state.getIn(['login','login'])
})

const mapDispatchToProps=(dispatch)=>{
    return{
        login(accountElem,passwordElem){
             const action=actionCreators.login(accountElem.value,passwordElem.value)
             dispatch(action)
        }

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login)
