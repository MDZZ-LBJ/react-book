import React , {Component} from 'react'
import {RecommentWrapper, RecommentItem} from '../style'
import {connect} from "react-redux";
class Recomment extends Component{
    render() {
        return(
            <RecommentWrapper>
                {
                    this.props.list.map((item)=>{
                        return (
                            <RecommentItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommentItem>
                        )
                    })
                }
            </RecommentWrapper>
        )
    }
}

const mapStateToProps=(state)=>({
    list:state.get('home').get('recommentList')
})

export default connect(mapStateToProps,null)(Recomment)
