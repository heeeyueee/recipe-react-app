import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import { SwiperWrap } from './styledHome'
import { connect } from 'react-redux'
import { GETLIST } from '../action-types'
const mapState = state => ({
    list: state.home.list
})
const mapDispatch = dispatch => ({
    loadData() {
        dispatch({
            type: GETLIST,
            url: '/api/list'
        })
    }
})
@connect(mapState, mapDispatch)

class Swiper extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        this.props.loadData()

    }
    render() {
        return (
            <SwiperWrap>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.props.list.slice(0, 5).map(val => (
                        <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >

                            <img
                                src={`${val.img}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </SwiperWrap>
        )
    }
}
export default Swiper