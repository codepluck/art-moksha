import React from 'react'

import {Skeleton, Typography, Card, Avatar, Row, Col, Divider, Image} from 'antd';
import {Fragment, Component} from 'react'


//components
import SectionTitle from './../common/Title';
import SingleArtwork from './Artwork'

const Artworks = props => {
    let artworksContent = props.data;
    let title = artworksContent[0].title;
    let description = artworksContent[0].description;
    let content = artworksContent[0].content;

    return (
        <Fragment>
            <section className={'am-section am-section-artwork'}>
                <section className={'am-section-container'}>
                    <section className={'am-section-title'}>
                        <SectionTitle
                            title={title}
                            description={description}
                            position={'left'}
                            button={{'title': 'View All', link: '#'}}>
                        </SectionTitle>
                    </section>
                    <section className={'am-section-content'}>
                        <Row justify={'center'} gutter={32}>
                            {content.map((artwork, index) => {
                                    return (
                                        <SingleArtwork
                                            key={index}
                                            title={artwork.title}
                                            description={artwork.content}
                                            cover={artwork.cover}
                                            artist={artwork.meta[0]}
                                        ></SingleArtwork>
                                    )
                                }
                            )}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    );
}

export default Artworks;
