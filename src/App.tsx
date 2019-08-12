import * as React from 'react';
import { Route, Switch} from "react-router";
import './App.css';

import AppHeader from "./header/AppHeader";
import {mainRoutes} from "./routing";
import HomePage from "./home/HomePage";
import {BrowserRouter, NavLink} from 'react-router-dom';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const logo = require('./logo.svg');

export interface IAppProps {  }
export interface IAppState { collapsed: boolean }

class App extends React.Component<IAppProps, IAppState> {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    onCollapse(collapsed: boolean) {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {

        const appState = {};

        //const appState = this.props.appState!;
        // const {initialized, loginRequired} = appState;
        //
        // if (!initialized) {
        //     return (
        //         <Centered>
        //             <Icon type="loading" style={{fontSize: 24}} spin={true}/>
        //         </Centered>
        //     )
        // }
        //
        // if (loginRequired) {
        //     return (
        //         <Centered>
        //             <Login/>
        //         </Centered>
        //     )
        // }

        // return (
        //     <Layout className='main-layout'>
        //         <Layout.Header>
        //             <AppHeader/>
        //         </Layout.Header>
        //         <Layout>
        //             <Layout.Sider width={200}
        //                           breakpoint='sm'
        //                           collapsedWidth={0}
        //                           style={{background: '#fff'}}>
        //                 <Menu mode="inline"
        //                       style={{height: '100%', borderRight: 0}}>
        //                     <Menu.Item key="1">
        //                         <BrowserRouter>
        //                             <NavLink to={'/'}><Icon type="home"/>Home</NavLink>
        //                         </BrowserRouter>
        //                     </Menu.Item>
        //                     {mainRoutes.map((route) =>
        //                         <Menu.Item key={route.menuLink}>
        //                             <BrowserRouter>
        //                                 <NavLink to={route.menuLink}><Icon type="bars"/>{route.caption}</NavLink>
        //                             </BrowserRouter>
        //                         </Menu.Item>
        //                     )}
        //                 </Menu>
        //             </Layout.Sider>
        //             <Layout style={{ padding: '24px 24px 24px' }}>
        //                 <Layout.Content>
        //                     <BrowserRouter>
        //                     <Switch>
        //                         <Route exact={true} path="/" component={HomePage}/>
        //                         {mainRoutes.map((route) =>
        //                             <Route key={route.pathPattern} path={route.pathPattern} component={route.component}/>
        //                         )}
        //                     </Switch>
        //                     </BrowserRouter>
        //                 </Layout.Content>
        //             </Layout>
        //         </Layout>
        //     </Layout>
        // );

        return (
            <Layout>
                <Header className="header">

                </Header>
                <Layout>
                    <Sider collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse.bind(this)}
                           width={200}
                           style={{ background: '#fff' }}>

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                <Icon type="user" />
                subnav 1
              </span>
                                }
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                <Icon type="laptop" />
                subnav 2
              </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                <Icon type="notification" />
                subnav 3
              </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;

