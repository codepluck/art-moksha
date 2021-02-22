import React, {Fragment} from 'react'
import {Col, Row} from "antd";

import SectionTitle from "./../common/Title";
import SingleValueComponent from './Single'

const Vision = (props) => {
    let ourValuesContent = props.data;
    let title = ourValuesContent[0].title;
    let description = ourValuesContent[0].description;
    let ourValuesData = ourValuesContent[0].content;

    return (
        <Fragment>
            <section className={'am-section am-section-vision '}>
                <section className={'am-section-container'}>
                    <section className={'am-section-title'}>
                        <SectionTitle title={title}
                                      description={description}>
                        </SectionTitle>
                    </section>
                    <section className={'am-section-content'}>
                        <Row gutter={[32, 48]}>
                            {ourValuesData.map((values, index) => {
                                return (
                                    <Col key={index}
                                         xs={{span: 24}}
                                         md={{span: 24}}
                                         lg={{span: 8}}
                                         >
                                        <SingleValueComponent
                                            key={index}
                                            title={values.name}
                                            image={values.image}
                                            icon={'img/' + values.image}
                                            description={values.description}>
                                        </SingleValueComponent>
                                    </Col>
                                )
                            })}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Vision