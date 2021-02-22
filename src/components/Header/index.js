import React, {Fragment} from "react"
import Navbar from "./Navbar/";


const styleHeader = {
    lineHeight: '100%',
};

const HeaderMain = (props) => {
    return (
        <Fragment>
            <header style={styleHeader}>
                <Navbar/>
            </header>
        </Fragment>
    )
}

export default HeaderMain;