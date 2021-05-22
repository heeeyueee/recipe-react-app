import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
import { HotcateWrap } from './styledHome'
import { get } from '../../utils/http'
import "./style.css";
export default class HotCate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCateList: []
        }
    }

    async componentDidMount() {
        let result = await get({
            url: '/api/hotcate'
        })
        let data = result.map((value) => ({
            text: value.title,
            icon: value.img
        }))
        this.setState({
            hotCateList: data
        })
    }

    render() {
        return (
            <HotcateWrap>
                <header>热门分类</header>
                <Grid className="not-square-grid" data={this.state.hotCateList} hasLine={false} square={false} />
            </HotcateWrap>
        )
    }
}
