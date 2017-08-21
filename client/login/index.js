/*
 * @Author: zhanghuiming
 * @Date:   2017-07-31 16:15:28
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-01 20:54:21
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {

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

ReactDOM.render(<Login/>, document.getElementById("app"));