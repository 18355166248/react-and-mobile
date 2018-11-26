import React, { Component } from 'react'
import { Menu, Icon, Row, Col } from 'antd'
import headerCss from '../../common/css/pc/header.less'
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

class PcHeader extends Component {
  state = {
    current: 'home'
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Row class={ headerCss.header }>
        <Col span={1}></Col>
        <div class={headerCss.headerImg}>
          <img src={process.env.PUBLIC_URL + '/image/news.png'} alt="网站图标"/>
          ReactNews
        </div>
        <Col span={16}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="home" />
              首页
            </Menu.Item>
            <Menu.Item key="news">
              <Icon type="book" />
              头条
            </Menu.Item>
            <Menu.Item key="one">
              <Icon type="book" />
              国内
            </Menu.Item>
            <Menu.Item key="two">
              <Icon type="book" />
              国际
            </Menu.Item>
            <Menu.Item key="three">
              <Icon type="book" />
              娱乐
            </Menu.Item>
            <Menu.Item key="four">
              <Icon type="book" />
              体育
            </Menu.Item>
            <Menu.Item key="five">
              <Icon type="book" />
              科技
            </Menu.Item>
            <Menu.Item key="six">
              <Icon type="book" />
              时尚
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2}>col-8</Col>
      </Row>
    )
  }
}

export default PcHeader
