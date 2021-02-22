import React, { Component } from 'react';
import MainMenu from '../Menu/MainMenu'
import { Drawer, Button } from 'antd';
import Hamburger from 'react-feather'
class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href="">logo</a>
                    <Hamburger color="red" size={48} />
                </div>
                <div className="menuCon">
                    <div className="rightMenu">
                        <MainMenu />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title=""
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <MainMenu />
                    </Drawer>

                </div>
            </nav>
        );
    }
}

export default Navbar;