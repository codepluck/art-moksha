import React, {Fragment} from "react";
import {Col, Row} from "antd";

// components
import SectionTitle from './../common/Title';
import SingleArtist from './Single'

const Artists = (props) => {

    let artistsContent = props.data;
    let title = artistsContent[0].title;
    let description = artistsContent[0].description;
    let artistsData = artistsContent[0].content;

    return (
        <Fragment>
            <section className={'am-section am-section-artists'}>
                <section className={'am-section-container'}>
                    {/*Title*/}
                    <section className={'am-section-title'}>
                        <SectionTitle
                            title={title}
                            description={description}
                            position={'center'}>
                        </SectionTitle>
                    </section>
                    {/*Content*/}
                    <section className={'am-section-content'}>
                        <Row gutter={[48, 48]}>
                            {artistsData.map((artist, index) => {
                                return (
                                    <SingleArtist
                                        key={index}
                                        name={artist.name}
                                        tagline={artist.tagline}
                                        avatar={artist.avatar}>
                                    </SingleArtist>
                                )
                            })}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Artists;