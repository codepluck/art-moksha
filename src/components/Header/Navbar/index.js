import React, {Component} from 'react';
import MainMenu from '../Menu/MainMenu'
import {Drawer, Button, Row, Col} from 'antd';
import {Camera, AlignLeft} from 'react-feather';

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
            <nav className="am-menu-bar">
                <Row gutter={[24]}>
                    <Col span={12}>
                        <div className="am-logo-wrapper">
                            <a className={'am-logo'} href="">Art Moksha</a>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="am-menu">
                            <Button className={'am-menu-button'} type='default'>Whitepaper</Button>
                        </div>
                    </Col>
                </Row>
            </nav>
        );
    }
}

export default Navbar;