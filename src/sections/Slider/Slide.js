import {React, Fragment} from "react";
import {Image, Carousel, Typography, Row, Col, Button} from "antd";

import {Avatar} from 'antd';
import {AntDesignOutlined} from '@ant-design/icons';


const {Title, Text, Paragraph} = Typography;


const contentStyle = {
    // height: '100%',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    height: '100%',
    boxSizing: 'border-box',
    padding: '5rem 3rem'

};

function onChange() {

}

const minHeight = {
    height: '500px',
}

const sliderTitle = {
    marginTop: '1rem',
    marginBottom: '1rem',
    color: '#fff'
}
const sliderText = {}
const Slide = (props) => {
    let imageUrl = props.image;
    let slideBackground = {
        backgroundImage: 'url("/img/slider/slide-2.jpg")',
        backgroundSize: '100%',
        opacity: '.8'
    }
    let slideWrapperStyle = Object.assign(contentStyle, slideBackground);
    return (
        <Fragment>
            <Carousel afterChange={onChange}>
                <section style={contentStyle} className={'slide-wrapper'}>
                    <Row gutter={[48, 48]}>
                        <Col
                            xs={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 12}}>
                            <section className={'slide-section section-top'}>
                                <Title style={sliderTitle} level={1}>Go Tang (Appliqué)</Title>
                                <Paragraph style={sliderText} className={'slider-text'}>
                                    Appliqué is ornamental
                                    needlework in which
                                    pieces or patch of fabric in different shapes and
                                    patterns are sewn or stuck onto a larger piece to form
                                    a picture or pattern..(wikipedia)
                                </Paragraph>
                            </section>
                            <section className={'slide-section section-bottom'}>
                                <Row gutter={24}>
                                    <Col
                                        xs={{span: 4}}
                                        md={{span: 3}}
                                        lg={{span: 3}}>
                                        <Avatar
                                            size={{xs: 32, sm: 32, md: 64, lg: 64, xl: 80, xxl: 48}}
                                            icon={<AntDesignOutlined/>}
                                        />
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 9}}
                                         lg={{span: 9}}>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>Many
                                                Artists</Text>
                                        </section>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>$500
                                                $2000</Text>
                                        </section>
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 12}}
                                         lg={{span: 12}}>
                                        <div className={'color-white'}>
                                            <Button className={'slide-button'} type={'default'}>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                </section>
                <section style={contentStyle} className={'slide-wrapper'}>
                    <Row gutter={[48, 48]}>
                        <Col
                            xs={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 12}}>
                            <section className={'slide-section section-top'}>
                                <Title style={sliderTitle} level={1}>Go Tang (Appliqué)</Title>
                                <Paragraph style={sliderText} className={'slider-text'}>
                                    Appliqué is ornamental
                                    needlework in which
                                    pieces or patch of fabric in different shapes and
                                    patterns are sewn or stuck onto a larger piece to form
                                    a picture or pattern..(wikipedia)
                                </Paragraph>
                            </section>
                            <section className={'slide-section section-bottom'}>
                                <Row gutter={24}>
                                    <Col xs={{span: 4}}
                                         md={{span: 3}}
                                         lg={{span: 3}}>
                                        <Avatar
                                            size={{xs: 16, sm: 32, md: 64, lg: 64, xl: 80, xxl: 48}}
                                            icon={<AntDesignOutlined/>}
                                        />
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 9}}
                                         lg={{span: 9}}>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>Many
                                                Artists</Text>
                                        </section>
                                        <section className={'artist-meta'}>
                                            <Text style={{textAlign: 'left', lineHeight: '100%'}}>$500
                                                $2000</Text>
                                        </section>
                                    </Col>
                                    <Col xs={{span: 10}}
                                         md={{span: 12}}
                                         lg={{span: 12}}>
                                        <div className={'color-white'}>
                                            <Button className={'slide-button'} type={'default'}>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                        </Col>
                    </Row>
                </section>
            </Carousel>
        </Fragment>
    )
}

export default Slide