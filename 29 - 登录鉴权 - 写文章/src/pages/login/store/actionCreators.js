import * as conants from './constants'
 import axios from 'axios'

export const changeLogin=()=>({
    type: conants.CHANGE_LOGIN,
    value:true,
})




export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password'+password).then((res)=>{
            const result=res.data.data
            if(result){
                const action=changeLogin()
                dispatch(action)
            }else {
                alert('登录失败')
            }

        })
    }
}

export const logout=(account,password)=>({
    type: conants.CHANGE_LOGINOUT,
    value:false,
})
