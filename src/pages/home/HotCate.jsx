import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { HotcateWrap } from './styledHome'
const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));
export default class HotCate extends Component {

    render() {
        return (
            <HotcateWrap>
                <header>热门分类</header>
                <Grid data={data} hasLine={false} />
            </HotcateWrap>
        )
    }
}
