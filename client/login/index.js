/*
 * @Author: zhanghuiming
 * @Date:   2017-07-31 16:15:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-09-07 17:35:14
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
export default class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
	        	<form method="post">
					<label htmlFor="username">username:&nbsp;&nbsp;</label>
					<input type="text" name="username" placeholder="plase input your nickname"/><br /><br />
					<label htmlFor="password">password:&nbsp;&nbsp;</label>
					<input type="password" name="password"/><br /><br />
					<input type="submit" value="登录"/>
				</form>
        	</div>
		);
	}
}