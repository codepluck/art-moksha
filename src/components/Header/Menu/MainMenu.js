import React from 'react';
import {Menu, Grid} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {useBreakpoint} = Grid;

const MainMenu = () => {
    const {md} = useBreakpoint()
    return (
        <Menu mode={md ? "horizontal" : "inline"}>
            <Menu.Item key="mail">
                <a href="#">WhitePaper</a>
            </Menu.Item>
        </Menu>
    );
}

export default MainMenu;