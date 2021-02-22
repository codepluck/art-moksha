import {Avatar, Button, Card, Col, Image, Row, Typography} from "antd";
import {UserOutlined, DownloadOutlined, ApiOutlined, PlusCircleOutlined} from '@ant-design/icons';
import React, {Fragment} from "react";
import {Plus} from "react-feather";

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

const style = {
    width: '100%',
    textAlign: 'center',
    borderRadius: '5px',
    verticalAlign: 'middle'
};
// .gfQEfb {
//     color: rgba(0, 0, 0, 0.6);
//     line-height: 25.2px;
//     font-family: inherit;
//     font-weight: inherit;
//     font-size: 18px;
//     text-decoration: none;
// }
const FAQS = (props) => {
    let {question, answer} = props;

    const toggleButton = (values) => {
        console.log(values);
    };
    return (
        <Fragment>
            <Col
                xs={{span: 24, offset: 0}}
                md={{span: 12}}
                lg={{span: 12, offset: 6}}>
                <section className={'am-faq-wrapper'}>
                    <div className={'am-question'}>
                        <Title className={'am-title'} level={5}>
                            <span>{question}</span>
                        </Title>
                        <div className={'am-icon'}>
                            <PlusCircleOutlined onClick={toggleButton}/>
                        </div>
                    </div>
                    <div className={'am-answer'}>
                        <Paragraph className={'am-answer'}>{answer}</Paragraph>
                    </div>
                </section>
            </Col>
        </Fragment>
    )
}
export default FAQS;