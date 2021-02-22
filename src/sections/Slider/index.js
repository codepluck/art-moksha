import {Skeleton, Card, Avatar, Row, Col, Divider, Image} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import React, {Fragment, Component} from 'react'

//component
import SlideOne from './../../assets/img/slider/slide-1.jpg';
import Slide from './Slide'
import * as url from "url";

const {Meta} = Card;
const style = {background: '#0092ff', padding: '8px 0'};

const styleDiv = {
    background: '#000',
    padding: '0 0 1rem 0',
    height: '664px',
    width: '100%',
    backgroundImage: 'url("/img/slider/slide-2.jpg")',
    backgroundSize: '100%'
};

class Slider extends Component {
    state = {
        loading: false,
    };
    onChange = checked => {
        this.setState({loading: !checked});
    };

    updateBackground = imageUrl => {

    }

    render() {
        const {loading} = this.state;
        return (
            <Fragment>
                <section style={styleDiv} className={'am-section am-section-slider p-b-0 p-t-0'}>
                    <section className={'am-section-container'}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={24}>
                                <Slide
                                    title={'Thank Ka'}
                                    description={'Thank Ka'}
                                    author={'Thank Ka'}
                                    image={SlideOne}></Slide>
                            </Col>
                        </Row>
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default Slider;

