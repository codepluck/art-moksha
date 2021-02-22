import React, {Fragment} from "react";
import {Button, Col, Image, Row, Typography} from "antd";
import {MessageOutlined, CheckCircleOutlined} from '@ant-design/icons';

//component
import SubscriptionForm from "./SubscriptionForm";


const {Title, Paragraph} = Typography;

const Subscription = props => {
    return (
        <Fragment>
            <section className={'am-section am-section-subscription'}>
                <section className={'am-section-container'}>
                    <section className={'am-section-content'}>
                        <Row gutter={[48, 48]}>
                            <Col
                                xs={{span: 24}}
                                md={{span: 10}}
                                lg={{span: 10}}>
                                <section className={'am-subscription-block left'}>
                                    <Title className={'subscription-title'} level={3}> Create your own
                                        collection</Title>
                                    <Paragraph className={'subscription-description'}>
                                        Artmoksha is commited to provide the best survice
                                        possible. If you want to create your own NFT you can
                                        register as an artist or if you are cruator or art lover
                                        or invester please send us an email with your artwork
                                        details at <strong>artmoksha@crypto.art</strong>.
                                    </Paragraph>
                                </section>
                            </Col>
                            <Col xs={{span: 24}}
                                 md={{span: 14}}
                                 lg={{span: 14}}>
                                <section className={'am-subscription-block right'}>
                                    <SubscriptionForm/>
                                </section>
                            </Col>
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Subscription;