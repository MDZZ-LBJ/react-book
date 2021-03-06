import styled from 'styled-components'

export  const HomeWrapper=styled.div`
      width: 960px;
      margin:  0 auto ;
      overflow: hidden;
`
export  const HomeLeft=styled.div`
      width: 625px;
      margin-left: 15px;
      padding-top: 30px;
      float: left;
      .banner-img{
         width: 625px;
         height: 270px;
      }
`
export  const HomeRight=styled.div`
      width: 280px;
      float: right;
`
export  const TopicWrapper=styled.div`
      padding: 20px 0 10px 0;
      overflow: hidden;
      margin-left: -18px;
      border-bottom: 1px solid #dcdcdc;
`

export  const TopicItem=styled.div`
      float: left;
      height: 32px;
      line-height: 32px;
      padding-right: 10px;
      margin-left: 18px;
      margin-bottom: 18px;
      font-size: 14px;
      background: #f7f7f7;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      .topic-pic{
         display: block;
         margin-right: 10px;
         float: left;
         width: 32px;
         height: 32px;
      }
`
export const ListItem=styled.div`
      padding: 20px 0; 
      border-bottom: 1px solid #dcdcdc;
      overflow: hidden;
      .pic{
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
      }
`
export const ListInfo=styled.div`
      width: 500px;
      float: left;
      .title{
         line-height: 27px;
         font-size: 18px;
         font-weight: bold;
         color: #333;
      }
      .desc{
         line-height: 24px;
         font-size: 18px;
         color: #ccc;
      }
`
export const RecommentWrapper=styled.div`
       margin: 30px 0;
       width: 280px;
`
export const RecommentItem=styled.div`
        width: 280px;
        height: 50px;
        background: url(${(props)=>props.imgUrl});
        background-size: contain;
`
export const WriterWrapper=styled.div`
        width: 278px;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        height: 300px;
        line-height: 300px;
        text-align: center;
`
