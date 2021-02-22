import {Fragment} from "react";
import {Col, Image, Row, Typography} from "antd";

const {Title, Text, Paragraph} = Typography;

const styleTitle = {
    padding: '.5rem',
    margin: '0 1rem'
}
const Single = props => {
    let {title, description, image, icon} = props;
    return (
        <Fragment>
            <div className={'am-vision-wrapper'}>
                <div className={'am-vision-img-container'}>
                    <Image
                        width={64}
                        height={64}
                        src={icon}
                        preview={false}
                    />
                </div>
                <Title className={'am-vision-title'} level={3}>{title}</Title>
                <Paragraph className={'am-vision-description'}>{description}</Paragraph>
            </div>
        </Fragment>
    )
}

export default Single;