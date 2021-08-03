import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <SubMenu title="COFFEE" key="coffee">
                <Menu.Item>
                    <Link to="/coffee">스타벅스원두</Link>
                </Menu.Item>    
                <Menu.Item>
                    <Link to="/coffee">나와 어울리는 커피</Link>
                </Menu.Item>
                <Menu.Item>    
                    <Link to="/coffee">스타벅스 리저브</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="MENU" key="menu">
                <Menu.Item>
                    <Link to="/menu/beverage">음료</Link>
                </Menu.Item>
                <Menu.Item>    
                    <Link to="/menu">푸드</Link>
                </Menu.Item>
                <Menu.Item>    
                    <Link to="/menu">상품</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default LeftMenu
