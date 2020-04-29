import React , {Component} from 'react'
import {DetailWrapper,Header,Content} from './style'
import {HomeLeft} from "../home/style";

class Detail extends Component{
    render() {
        return(
            <DetailWrapper>
                <Header>美国财政部长表扬湖人归还贷款 本对湖人不满</Header>
                <Content>
                    <img className='banner-img' src={require('../../statics/detail.jpg')} alt=""/>
                    <p>今天，美国财政部长姆努钦在接受采访时表示他万万没有想到洛杉矶湖人队会向美国联邦政府申请贷款，他甚至称湖人队的这个举动有点过分了。</p>
                    <p>我万万都没有想到，洛杉矶湖人队，顺便说一句，我是湖人队的忠实粉丝，但是我不喜欢他们得到了460万美元的贷款。”姆努钦说道，“我认为这有点过分了，不过我很高兴他们已经返还了这笔钱。</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail
