import styled from 'styled-components'

export const HeaderWrap=styled.div`
    height:.44rem;
    background:#ee742f;
    font-size:.18rem;
    color:#fff;
    text-align:center;
    line-height:.44rem;
`


export const SwiperWrap=styled.div `
    height:0;
    font-size:0;
    padding-bottom:66.66667%;
    img{
        width:100%;
    }
   
`

export const HotcateWrap=styled.div `
header{
    color:#666;
    line-height:.5rem;
    background:#fff;
    padding-left:.2rem;
    margin-bottom: -0.2rem;
}
  
`


export const HotListWrap=styled.div `
header{
    color:#666;
    line-height:.5rem;
    background:#fff;
    padding-left:.2rem;
   
}
 >div{
    display:flex;
    flex-wrap:wrap;
    figure{
        border-radius: 3px;
        background:#fff;
        width:48%;
        margin:3px auto;
        img{
            border-radius: 3px 3px 0px 0px;
            width:100%
        }
        // 给奇数行偶数行设置
        /* &:nth-child(odd){
             padding-right:.05rem;
        }
        */
        
        &:nth-child(even){
             margin-left: 1.5px;
        } 
        figcaption{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            height:.6rem;
           
        }
        div{
            display: flex;
        }
        h3{
            font-size:.12rem
        }
        h6{
            margin-left: 5px;
            color:#666;
            font-size:10px;
            font-weight:normal;
        }

    }
}
`