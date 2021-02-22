import {Typography, Image, Col} from "antd";
import React, {Fragment} from "react";

const {Title} = Typography;

const Collection = (props) => {
    let {title, cover} = props;
    const [random, setRandom] = React.useState();
    return (
        <Fragment>
            <Col className="gutter-row"
                 xs={{span: 24}}
                 md={{span: 24}}
                 lg={{span: 8}}>
                <section className={'am-single-collection-wrapper'}>
                    {/*<div id="overlay"></div>*/}
                    <div style={{
                        // backgroundImage: 'url("/img/' + cover + '")'
                    }} className={'am-single-collection'}>
                        <div className={'am-collection'}>
                            <Image
                                width={'100%'}
                                src={'/img/' + cover}
                                placeholder={
                                    <Image
                                        // preview={false}
                                        src={'/img/' + cover}
                                        width={200}
                                    />
                                }
                            />
                            {/*<Title className={'am-single-collection-title'} level={4}>{title}</Title>*/}
                            {/*<Image src={'/img/' + cover}/>*/}
                        </div>
                    </div>
                </section>
            </Col>
        </Fragment>
    )
}

export default Collection;