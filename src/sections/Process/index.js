import React, {Fragment} from "react";
import {Col, Image, Row, Typography} from "antd";
import {MessageOutlined, CheckCircleOutlined} from '@ant-design/icons';
//component
import Single from './Single'
import SectionTitle from "../common/Title";


const Process = props => {
    let processContent = props.data;
    let title = processContent[0].title;
    let description = processContent[0].description;
    let steps = processContent[0].content;
    return (
        <Fragment>
            <section className={'am-section am-section-process'}>
                <section className={'am-section-container'}>
                    <section className={'am-section-title'}>
                        <SectionTitle title={title}
                                      description={description}>
                        </SectionTitle>
                    </section>
                    <section className={'am-section-content'}>
                        <Row gutter={[48, 48]}>
                            {steps.map((step, index) => {
                                return (<Col key={index}
                                             xs={{span: 24}}
                                             md={{span: 12}}
                                             lg={{span: 12}}
                                             gutter={2}>
                                    <Single
                                        key={index}
                                        count={++index}
                                        title={step.title}
                                        icon={step.icon}
                                        description={step.description}
                                    ></Single>
                                </Col>)
                            })}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Process;