/*
 * @Author: zhanghuiming
 * @Date:   2017-06-22 14:11:50
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-06-22 16:32:02
 */

'use strict';
import React, {
	PropTypes,
	Component
} from 'react';
var ReactDOM = require('react-dom');

export default class Page extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		const width = 10000;
		const height = 1012 * width / 1920;
		return (
			<div className="LoginPage">
		        <div className="container" style={{width: width,  height: height}}>
		          <div className="action-btn">
		            <linkButton >登录体验</linkButton>
		          </div>
		        </div>
      		</div>
		);
	}
}

ReactDOM.render(<Page/>, document.getElementById('app'));