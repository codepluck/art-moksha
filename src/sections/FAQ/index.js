import React, {Fragment} from 'react'
import {Col, Row, Typography, Anchor} from "antd";


//component
import SectionTitle from "../common/Title";
import SingleFAQ from './Single'

const Faqs = (props) => {
    let faqData = props.data;
    let title = faqData[0].title;
    let description = faqData[0].description;
    let faqs = faqData[0].content;
    return (
        <Fragment>
            <section className={'am-section'}>
                <section className={'am-section-container'}>
                    <section className={'am-section-title'}>
                        <SectionTitle title={title}
                                      description={(description) ? description : ' '}>
                        </SectionTitle>
                    </section>
                    <section className={'am-section-content'}>
                        <Row gutter={[32, 32]} style={{marginTop: '1rem'}}>
                            {faqs.map((faq, index) => {
                                return (
                                    <SingleFAQ
                                        key={index}
                                        question={faq.question}
                                        answer={faq.answer}>
                                    </SingleFAQ>
                                )
                            })}
                        </Row>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Faqs