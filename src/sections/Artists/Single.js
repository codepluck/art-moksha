import {Avatar, Button, Card, Tooltip, Col, Image, Row, Typography} from "antd";
import {FacebookOutlined, InstagramOutlined, TwitterCircleFilled, TwitterOutlined} from '@ant-design/icons';
import React, {Fragment} from "react";

const {Title, Text, Paragraph} = Typography;

const {Meta, Grid} = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const amCardImage = {
    borderRadius: '5px',
    maxHeight: '450px',
    minHeight: '450px',
}

const styleWrapper = {};

const styleCard = {}

const Artist = (props) => {
    let {name, avatar, tagline} = props;
    return (
        <Fragment>
            <Col className="gutter-row"
                 xs={{span: 24}}
                 md={{span: 24}}
                 lg={{span: 6}}>
                <div className={'am-artist'}>
                    <section className={'artist-image'}>
                        <img alt={name} src={avatar}/>
                    </section>
                    <section className={'artist-description'}>
                        <div className={'artist-title'}>{name}</div>
                        <div className={'artist-tagline'}>{tagline}</div>
                        <div className={'artist-meta'}>
                            <div className={'collections col-8'}>
                                <strong>14</strong>&nbsp;
                                <span>artworks</span>&nbsp;
                            </div>
                            <div className={'artworks col-8'}>
                                <strong>2</strong>&nbsp;
                                <span>collections</span>
                            </div>
                        </div>
                        <div className={'artist-meta social-media'}>
                            <div className={'artworks col-8'}>
                                <a href={'#'} title={'Follow On Facebook'}>
                                    <Tooltip title="Follow On Facebook">
                                        <FacebookOutlined/>
                                    </Tooltip>
                                </a>
                            </div>
                            <div className={'artworks col-8'}>
                                <a href={'#'} title={'Follow On Instagram'}>
                                    <Tooltip title="Follow On Instagram">
                                        <InstagramOutlined/>
                                    </Tooltip>
                                </a>
                            </div>
                            <div className={'artworks col-8'}>
                                <a href={'#'} title={'Follow On Twitter'}>
                                    <Tooltip title="Follow On Twitter">
                                        <span><TwitterCircleFilled/></span>
                                    </Tooltip>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </Col>
        </Fragment>
    )
}
export default Artist;