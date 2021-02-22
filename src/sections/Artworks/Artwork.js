import {Avatar, Button, Card, Col, Row, Typography} from "antd";
import React, {Fragment} from "react";


const {Title} = Typography;
const {Meta, Grid} = Card;
const Artwork = (props) => {

    let {title, description, cover, artist} = props;
    return (
        <Fragment>
            <Col className="gutter-row am-artwork-wrapper"
                 xs={{span: 24}}
                 md={{span: 24}}
                 lg={{span: 6}}>
                <div className={'am-artwork'}>
                    <Card
                        headStyle={{border: 0}}
                        cover={<img
                            xs={{span: 24}}
                            md={{span: 24}}
                            lg={{span: 6}}
                            className={'am-artwork-image'}
                            alt={(title) ? title : ' '}
                            src={'/img/' + cover}/>}
                        bordered={true}
                        size={'large'}
                    >
                        <div className={'am-artwork-body-wrapper'}>
                            <Row className={'title-row'} style={{marginBottom: '.5rem'}}>
                                <Title className={'am-artwork-title'} level={4}>{(title) ? title : ' '}</Title>
                            </Row>
                            <Row justify={'center'}>
                                <Col span={14}>
                                    <Meta
                                        avatar={<Avatar
                                            src={artist.avatar}/>}
                                        title={artist.name}
                                        description={artist.profile}
                                    />
                                </Col>
                                <Col span={10}>
                                    <Button
                                        className={'artwork-button'}
                                        link="#" type="default"
                                        size={'medium'}>
                                        Buy Now
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </div>
            </Col>
        </Fragment>
    )
}

export default Artwork;