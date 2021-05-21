import { TabBar } from 'antd-mobile';
import React from 'react';
import home from 'assets/home.png'
import homeSelected from 'assets/homeselected.png'
import recipe from 'assets/recipe.png'
import recipeSelected from 'assets/recipeselected.png'
import my from 'assets/my.png'
import mySelected from 'assets/myselected.png'
import Home from './home/Home'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'homeTab',
            hidden: false,
            fullScreen: true,
        };
    }

    renderContent(pageText) {
        switch (pageText) {
            case "home":
                return (
                    <div style={{ backgroundColor: 'white', height: '100%' }}>
                        <Home></Home>
                    </div>
                );
            case "recipe":
                return (
                    <div style={{ backgroundColor: 'white', height: '100%' }}>
                        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                    </div>
                );
            case "my":
                return (
                    <div style={{ backgroundColor: 'white', height: '100%' }}>
                        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                    </div>
                );
            default:
                return (
                    <div style={{ backgroundColor: 'white', height: '100%' }}>
                        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                    </div>
                );
        }

    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#f3a671"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${homeSelected}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'homeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'homeTab',
                            });
                        }}
                        data-seed="logId"
                    >

                        {this.renderContent('home')}
                    </TabBar.Item>
                    <TabBar.Item
                        title="食谱大全"
                        key="recipe"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${recipe}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${recipeSelected}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'recipeTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'recipeTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('recipe')}
                    </TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="my"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${my}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${mySelected}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'myTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'myTab',
                            });
                        }}
                        data-seed="logId2"
                    >
                        {this.renderContent('my')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

