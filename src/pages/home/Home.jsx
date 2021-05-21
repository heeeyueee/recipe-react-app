import React, { Component } from 'react'
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
import HotCate from './HotCate'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
                <HotCate></HotCate>
            </div>
        )
    }
}
