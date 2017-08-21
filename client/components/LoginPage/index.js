/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 18:08:01
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-22 18:08:46
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginPage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="HomePage">
	        	<div className="container" style={{ width: '100%', height: '100%', padding: 0 , position: 'absolute' }}>
		          	<div className="action-btn">
		          		LoginPage
		          	</div>
	        	</div> 
        	</div>
		);
	}

}