import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import imgOne from 'assets/swiper-1.png'
import imgTwo from 'assets/swiper-2.jpeg'
import imgThree from 'assets/swiper-3.jpeg'
import { SwiperWrap } from './styledHome'
export default class Swiper extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [imgOne, imgTwo, imgThree],
            });
        }, 100);
    }
    render() {
        return (
            <SwiperWrap>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${val}`}
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
