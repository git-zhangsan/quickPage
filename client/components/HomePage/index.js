/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 17:41:16
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-21 15:11:37
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
export default class Page extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="HomePage">
	        	<div className="container" style={{ width: '100%', height: '100%', padding: 0 , position: 'absolute' }}>
		          	<div className="action-btn">
		          		<h1>This is HomePage...{this.props.title} , Hello</h1>
		          	</div>
	        	</div> 
        	</div>
		);
	}

}