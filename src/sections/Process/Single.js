import {Fragment} from "react";
import {Col, Image, Row, Typography} from "antd";

const {Title, Text, Paragraph} = Typography;

const styleTitle = {}
const Single = props => {
    let {title, description, count, image, icon} = props;
    return (
        <Fragment>
            <div className={'am-step-single'}>
                <div className={'am-step-img-container'}>
                    <Image preview={false} style={{height: '92px'}} src={icon}/>
                </div>
                <Title className={'am-step-title'} style={styleTitle} level={3}>
                    {count} {title}
                </Title>
                <Paragraph className={'am-step-description'}>{description}</Paragraph>
            </div>
        </Fragment>
    )
}

export default Single;