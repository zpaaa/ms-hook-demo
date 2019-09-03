import React, { Component } from 'react';
import { Menu } from 'antd';
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
class Tabbar extends Component {
	render() {
		const path = createBrowserHistory().location.pathname
		return (
			<Menu
				className='tabbar-container'
				selectedKeys={[path]}>
				<Menu.Item key="/">
					<Link to='/'>医生名单</Link>
				</Menu.Item>
				<Menu.Item key="/chart">
					<Link to='/chart'>分析</Link>
				</Menu.Item>
			</Menu>
		)
	}
}
export default Tabbar
  