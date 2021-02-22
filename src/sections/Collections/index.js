import React, {Fragment} from 'react'
import {Col, Row, Typography, Anchor} from "antd";


//component
import SectionTitle from "../common/Title";
import SingleCollection from './Single'

const {Text, Title} = Typography;

const Collections = (props) => {
    let collectionsData = props.data;
    let title = collectionsData[0].title;
    let description = collectionsData[0].description;
    let collections = collectionsData[0].content;

    return (
        <Fragment>
            <section className={'am-section am-section-collections'}>
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
                        <Row gutter={[48, 48]}>
                            {collections.map((collection, index) => {
                                return (
                                    <SingleCollection
                                        key={index}
                                        title={collection.name}
                                        cover={collection.cover}>
                                    </SingleCollection>
                                )
                            })}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}
export default Collections