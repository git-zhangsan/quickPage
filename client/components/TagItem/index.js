/*
 * @Author: zhanghuiming
 * @Date:   2017-08-21 16:30:22
 * @Last Modified by:   zhanghuiming
 * @Last Modified time: 2017-08-21 17:02:31
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class TagItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var markHTML = this.props.tags.map(function(item, i) {
			return (
				<div  key={i}>
					<span>{item}</span>
				</div>
			)
		});
		return (
			<div>
	        	{markHTML}
        	</div>
		);
	}

}